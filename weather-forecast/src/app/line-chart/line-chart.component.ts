import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { WeatherAPIService } from '../api/weather-api.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent{
  @ViewChild('lineChart') lineChartElement: ElementRef;
  lineChart: any;ctx;
  constructor() {
  }
  ngOnInit() {    
  }
  ngAfterViewInit() {    
    this.ctx = this.lineChartElement.nativeElement.getContext('2d');
    this.lineChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: WeatherAPIService.weatherDates,
        datasets: [
          {
            label: 'Temperature (C)',
            data: WeatherAPIService.maxTemp,
            borderColor: '#2196f3',
            fill: false,
            borderWidth: 2,
            backgroundColor: 'transparent',
          },
          {
            label: 'Temperature (C)',
            data: WeatherAPIService.minTemp,
            borderColor: '#2196f3',
            fill: false,
            borderWidth: 2,
            backgroundColor: 'black'
          }
        ]
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            type: "time",
            time: {
              unit: 'hour',
              unitStepSize: 3,
              round: 'hour',
              tooltipFormat: "h:mm:ss a",
              displayFormats: {
                hour: 'MMM D, h:mm A'
              }
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Temperature in Degree Celcius",
              fontColor: "red"
            }
          }]
        },
        responsive: true,
      }
    });
  }
}
