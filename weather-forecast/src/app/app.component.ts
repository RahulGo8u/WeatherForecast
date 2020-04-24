import { Component, ElementRef, ViewChild } from '@angular/core';
import { WeatherAPIService } from './api/weather-api.service'
import { WorldweatherapiService } from './api/worldweatherapi.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'weather-forecast';
  showCharts = false;
  showTable = false;
  chart1: any;
  imgIcon; cityName; countryName; weather;
  response: any = {}; 

  searchCity(value) {
    event.preventDefault();
    this.showCharts = false;
    this.showTable = false;
    this.cityName = value;  
    this.weatherAPI.getResponse(value).then(x => this.showTableData() );    
  }

showTableData()
{
  this.showTable = true;
  this.countryName = WeatherAPIService.response.city.country;
  this.weather = WeatherAPIService.response.list[0].weather[0].description;
  this.imgIcon = WeatherAPIService.response.list[0].weather[0].icon;
  this.worldWeatherAPI.getHistoryResponse(this.cityName).then(x => this.showCharts = true);
  }

  constructor(private weatherAPI: WeatherAPIService, private worldWeatherAPI: WorldweatherapiService) {
   
  }
}
