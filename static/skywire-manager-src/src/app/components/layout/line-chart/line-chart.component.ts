import { Component, DoCheck, ElementRef, Input, IterableDiffers, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements AfterViewInit, DoCheck {
  @ViewChild('chart', { static: false }) chartElement: ElementRef;
  @Input() data: number[];
  chart: any;

  private differ: any;

  constructor(
    differs: IterableDiffers,
  ) {
    this.differ = differs.find([]).create(null);
  }

  ngAfterViewInit() {
    this.chart = new Chart(this.chartElement.nativeElement, {
      type: 'line',
      data: {
        labels: Array.from(Array(this.data.length).keys()),
        datasets: [{
          data: this.data,
          backgroundColor: ['#0B6DB0'],
          borderColor: ['#0B6DB0'],
          borderWidth: 1,
        }],
      },
      options: {
        maintainAspectRatio: false,
        events: [],
        legend: { display: false },
        tooltips: { enabled: false },
        scales: {
          yAxes: [{
            display: false,
            ticks: {
              suggestedMin: 0,
            },
          }],
          xAxes: [{ display: false }],
        },
        elements: { point: { radius: 0 } },
      },
    });
  }

  ngDoCheck() {
    const changes = this.differ.diff(this.data);

    if (changes && this.chart) {
      this.chart.update();
    }
  }
}
