import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from '../api/weather-api.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  result;
  constructor() { }
  cityName; population; coordinates; dateTime; tempMax; tempMin; humidity; pressure; seaLevel; groundLevel; temp; chart = []; weather; weatherDesc; windDeg; windSpeed; date;
  ngOnInit(): void {
    this.result = WeatherAPIService.response;
    this.population = this.result['city'].population;
    this.coordinates = `${this.result['city'].coord.lat} ${this.result['city'].coord.lon}`;
    this.humidity = this.result['list'][0].main.humidity;
    this.pressure = this.result['list'][0].main.pressure;
    this.seaLevel = this.result['list'][0].main.sea_level;
    this.groundLevel = this.result['list'][0].main.grnd_level;
    this.temp = this.result['list'][0].main.temp;
    this.date = this.result['list'][0].dt_txt;
    this.weather = this.result['list'][0].weather[0].main;
    this.weatherDesc = this.result['list'][0].weather[0].description;
    this.windDeg = this.result['list'][0].wind.deg;
    this.windSpeed = this.result['list'][0].wind.speed;
    this.cityName = this.result['city'].name;;
  }

}
