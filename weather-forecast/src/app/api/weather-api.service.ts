import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  //input your API key
  apiKey = '';
  apiBaseURL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  apiParams = '&units=metric&appid='.concat(this.apiKey);
  url = "";
  static response; static weatherDates; static minTemp; static  maxTemp;
  constructor(private _httpC: HttpClient) { }

  getResponse(cityName) {
    this.url = this.apiBaseURL.concat(cityName).concat(this.apiParams);
    return this._httpC.get(this.apiBaseURL.concat(cityName).concat(this.apiParams))
      .toPromise().then(data => {
        WeatherAPIService.response = data;
        WeatherAPIService.weatherDates = data['list'].map(res => res.dt_txt);
        WeatherAPIService.minTemp = data['list'].map(res => res.main.temp_min);
        WeatherAPIService.maxTemp = data['list'].map(res => res.main.temp_max);
      });
  }
}
