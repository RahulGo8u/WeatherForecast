import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from '../api/weather-api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  response;
  constructor() { }

  ngOnInit(): void {
    this.response = WeatherAPIService.response;
  }

}
