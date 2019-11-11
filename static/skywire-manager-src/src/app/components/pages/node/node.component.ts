import { Component, OnDestroy, OnInit, NgZone } from '@angular/core';
import { NodeService } from '../../../services/node.service';
import { Node } from '../../../app.datatypes';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { of, Observable, ReplaySubject, timer } from 'rxjs';
import { delay, flatMap, tap } from 'rxjs/operators';
import { StorageService } from '../../../services/storage.service';
import TimeUtils from '../../../utils/timeUtils';
import { TabButtonData } from '../../layout/tab-bar/tab-bar.component';
import { SnackbarService } from '../../../services/snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { EditLabelComponent } from '../../layout/edit-label/edit-label.component';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit, OnDestroy {
  private static currentInstanceInternal: NodeComponent;
  private static currentNodeKey: string;
  private static nodeSubject: ReplaySubject<Node>;

  showMenu = false;
  node: Node;
  onlineTimeTextElements = ['seconds', ''];
  notFound = false;

  private lastUrl: string;
  titleParts = [];
  tabsData: TabButtonData[] = [];
  selectedTabIndex = -1;

  private dataSubscription: Subscription;
  private updateTimeSubscription: Subscription;
  private navigationsSubscription: Subscription;

  secondsSinceLastUpdate = 0;
  private lastUpdate = Date.now();
  updating = false;
  errorsUpdating = false;

  public static refreshCurrentDisplayedData() {
    if (NodeComponent.currentInstanceInternal) {
      NodeComponent.currentInstanceInternal.refresh(0);
    }
  }

  public static getCurrentNodeKey(): string {
    return NodeComponent.currentNodeKey;
  }

  public static get currentNode(): Observable<Node> {
    return NodeComponent.nodeSubject.asObservable();
  }

  constructor(
    private nodeService: NodeService,
    private route: ActivatedRoute,
    private router: Router,
    public storageService: StorageService,
    private ngZone: NgZone,
    private snackbarService: SnackbarService,
    private dialog: MatDialog,
  ) {
    NodeComponent.nodeSubject = new ReplaySubject<Node>(1);
    NodeComponent.currentInstanceInternal = this;

    this.navigationsSubscription = router.events.subscribe(event => {
      if (event['urlAfterRedirects']) {
        NodeComponent.currentNodeKey = this.route.snapshot.params['key'];
        this.lastUrl = event['urlAfterRedirects'] as string;
        this.updateTabBar();
      }
    });
  }

  ngOnInit() {
    this.refresh(0);

    this.ngZone.runOutsideAngular(() => {
      this.updateTimeSubscription =
        timer(5000, 5000).subscribe(() => this.ngZone.run(() => {
          this.secondsSinceLastUpdate = Math.floor((Date.now() - this.lastUpdate) / 1000);
        }));
    });
  }

  showEditLabelDialog() {
    this.dialog.open(EditLabelComponent, {
      data: this.node,
    }).afterClosed().subscribe((changed: boolean) => {
      if (changed) {
        this.refresh(0);
      }
    });
  }

  private updateTabBar() {
    if (this.lastUrl && (this.lastUrl.includes('/routing') || (this.lastUrl.includes('/apps') && !this.lastUrl.includes('/apps-list')))) {
      this.titleParts = ['nodes.title', 'node.title'];

      this.tabsData = [
        {
          icon: 'shuffle',
          label: 'actions.menu.routing',
          linkParts: NodeComponent.currentNodeKey ? ['/nodes', NodeComponent.currentNodeKey, 'routing'] : null,
        },
        {
          icon: 'apps',
          label: 'actions.menu.apps',
          linkParts: NodeComponent.currentNodeKey ? ['/nodes', NodeComponent.currentNodeKey, 'apps'] : null,
        }
      ];

      this.selectedTabIndex = 0;
      if (this.lastUrl.includes('/apps')) {
        this.selectedTabIndex = 1;
      }
    } else if (
      this.lastUrl && (this.lastUrl.includes('/transports') ||
      this.lastUrl.includes('/routes') ||
      this.lastUrl.includes('/apps-list'))) {

      let prefix = 'transports';
      if (this.lastUrl.includes('/routes')) {
        prefix = 'routes';
      } else if (this.lastUrl.includes('/apps-list')) {
        prefix = 'apps.apps-list';
      }

      this.titleParts = ['nodes.title', 'node.title', prefix + '.title'];

      this.tabsData = [
        {
          icon: 'view_headline',
          label: prefix + '.list-title',
          linkParts: this.node ? [] : null,
        }
      ];

      this.selectedTabIndex = 0;
    } else {
      this.titleParts = [];
      this.tabsData = [];
    }
  }

  private refresh(delayMilliseconds: number) {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }

    this.ngZone.runOutsideAngular(() => {
      this.dataSubscription = of(1).pipe(
        delay(delayMilliseconds),
        tap(() => this.ngZone.run(() => this.updating = true)),
        delay(120),
        flatMap(() => this.nodeService.getNode(NodeComponent.currentNodeKey))
      ).subscribe((node: Node) => {
        this.ngZone.run(() => {
          this.node = node;
          NodeComponent.nodeSubject.next(node);
          this.onlineTimeTextElements = TimeUtils.getElapsedTimeElements(node.seconds_online);

          this.snackbarService.closeCurrentIfTemporalError();
          this.updateTabBar();

          this.lastUpdate = Date.now();
          this.secondsSinceLastUpdate = 0;
          this.updating = false;
          this.errorsUpdating = false;

          this.refresh(this.storageService.getRefreshTime() * 1000);
        });
      }, (err: HttpErrorResponse) => {
        this.ngZone.run(() => {
          if (err.status && (err.status === 400 || err.status === 404)) {
            this.notFound = true;

            return;
          }

          if (!this.errorsUpdating) {
            if (!this.node) {
              this.snackbarService.showError('common.loading-error', null, true);
            } else {
              this.snackbarService.showError('node.error-load', null, true);
            }
          }

          this.updating = false;
          this.errorsUpdating = true;

          if (!this.node) {
            this.refresh(3000);
          } else {
            this.refresh(this.storageService.getRefreshTime() * 1000);
          }
        });
      });
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
    this.updateTimeSubscription.unsubscribe();
    this.navigationsSubscription.unsubscribe();

    NodeComponent.currentInstanceInternal = undefined;
    NodeComponent.currentNodeKey = undefined;

    NodeComponent.nodeSubject.complete();
    NodeComponent.nodeSubject = undefined;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
