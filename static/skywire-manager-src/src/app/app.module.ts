import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/pages/login/login.component';
import { NodeListComponent } from './components/pages/node-list/node-list.component';
import { NodeComponent } from './components/pages/node/node.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, RippleGlobalOptions, MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TransportListComponent } from './components/pages/node/routing/transport-list/transport-list.component';
import { NodeAppsListComponent } from './components/pages/node/apps/node-apps-list/node-apps-list.component';
import { CopyToClipboardTextComponent } from './components/layout/copy-to-clipboard-text/copy-to-clipboard-text.component';
import { ActionsComponent } from './components/pages/node/actions/actions.component';
import { LogComponent } from './components/pages/node/apps/node-apps-list/log/log.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { PasswordComponent } from './components/pages/settings/password/password.component';
import { ClipboardService } from './services/clipboard.service';
import { ClipboardDirective } from './directives/clipboard.directive';
import { AppTranslationModule } from './app-translation.module';
import { ButtonComponent } from './components/layout/button/button.component';
import { EditLabelComponent } from './components/layout/edit-label/edit-label.component';
import { DialogComponent } from './components/layout/dialog/dialog.component';
import { LineChartComponent } from './components/layout/line-chart/line-chart.component';
import { ChartsComponent } from './components/pages/node/charts/charts.component';
import { RouteListComponent } from './components/pages/node/routing/route-list/route-list.component';
import { RoutingComponent } from './components/pages/node/routing/routing.component';
import { AppsComponent } from './components/pages/node/apps/apps.component';
import { CreateTransportComponent } from './components/pages/node/routing/transport-list/create-transport/create-transport.component';
import { AutoScalePipe } from './pipes/auto-scale.pipe';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { BasicTerminalComponent } from './components/pages/node/actions/basic-terminal/basic-terminal.component';
import { RouteDetailsComponent } from './components/pages/node/routing/route-list/route-details/route-details.component';
import { RefreshRateComponent } from './components/pages/settings/refresh-rate/refresh-rate.component';
import { LoadingIndicatorComponent } from './components/layout/loading-indicator/loading-indicator.component';
import { RefreshButtonComponent } from './components/layout/refresh-button/refresh-button.component';
import { ViewAllLinkComponent } from './components/layout/view-all-link/view-all-link.component';
import { AllTransportsComponent } from './components/pages/node/routing/all-transports/all-transports.component';
import { PaginatorComponent } from './components/layout/paginator/paginator.component';
import { AllRoutesComponent } from './components/pages/node/routing/all-routes/all-routes.component';
import { AllAppsComponent } from './components/pages/node/apps/all-apps/all-apps.component';
import { TabBarComponent } from './components/layout/tab-bar/tab-bar.component';
import { RouteReuseStrategy } from '@angular/router';
import { AppReuseStrategy } from './app.reuse-strategy';
import { ConfirmationComponent } from './components/layout/confirmation/confirmation.component';
import { TransportDetailsComponent } from './components/pages/node/routing/transport-list/transport-details/transport-details.component';
import { LogFilterComponent } from './components/pages/node/apps/node-apps-list/log/log-filter/log-filter.component';
import { SnackbarComponent } from './components/layout/snack-bar/snack-bar.component';
import { InitialSetupComponent } from './components/pages/login/initial-setup/initial-setup.component';
import { SelectLanguageComponent } from './components/layout/select-language/select-language.component';
import { LangButtonComponent } from './components/layout/lang-button/lang-button.component';
import { TruncatedTextComponent } from './components/layout/truncated-text/truncated-text.component';
import { NodeInfoContentComponent } from './components/pages/node/node-info/node-info-content/node-info-content.component';
import { NodeInfoComponent } from './components/pages/node/node-info/node-info.component';
import { SelectOptionComponent } from './components/layout/select-option/select-option.component';
import { SkysocksSettingsComponent } from './components/pages/node/apps/node-apps/skysocks-settings/skysocks-settings.component';
import {
  SkysocksClientSettingsComponent
} from './components/pages/node/apps/node-apps/skysocks-client-settings/skysocks-client-settings.component';
import { MenuButtonComponent } from './components/layout/sidenav/menu-button/menu-button.component';
import { FiltersSelectionComponent } from './components/layout/filters-selection/filters-selection.component';
import { LabeledElementTextComponent } from './components/layout/labeled-element-text/labeled-element-text.component';
import { AllLabelsComponent } from './components/pages/settings/all-labels/all-labels.component';
import { LabelListComponent } from './components/pages/settings/all-labels/label-list/label-list.component';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NodeListComponent,
    NodeComponent,
    AutoScalePipe,
    ActionsComponent,
    LogComponent,
    TransportListComponent,
    NodeAppsListComponent,
    CopyToClipboardTextComponent,
    SettingsComponent,
    PasswordComponent,
    ClipboardDirective,
    ButtonComponent,
    EditLabelComponent,
    DialogComponent,
    LineChartComponent,
    ChartsComponent,
    RouteListComponent,
    RoutingComponent,
    AppsComponent,
    CreateTransportComponent,
    SidenavComponent,
    BasicTerminalComponent,
    RouteDetailsComponent,
    RefreshRateComponent,
    LoadingIndicatorComponent,
    RefreshButtonComponent,
    ViewAllLinkComponent,
    AllTransportsComponent,
    AllRoutesComponent,
    AllAppsComponent,
    PaginatorComponent,
    TabBarComponent,
    ConfirmationComponent,
    TransportDetailsComponent,
    LogFilterComponent,
    SnackbarComponent,
    InitialSetupComponent,
    SelectLanguageComponent,
    LangButtonComponent,
    TruncatedTextComponent,
    NodeInfoContentComponent,
    NodeInfoComponent,
    SelectOptionComponent,
    SkysocksSettingsComponent,
    SkysocksClientSettingsComponent,
    MenuButtonComponent,
    FiltersSelectionComponent,
    LabeledElementTextComponent,
    AllLabelsComponent,
    LabelListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppTranslationModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    FormsModule,
    MatProgressBarModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
  ],
  providers: [
    ClipboardService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3000, verticalPosition: 'top'}},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {width: '600px', hasBackdrop: true}},
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    {provide: RouteReuseStrategy, useClass: AppReuseStrategy},
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
