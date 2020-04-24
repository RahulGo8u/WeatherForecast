import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WorldweatherapiService {
  //input your API key
  appid = '';
  url = 'https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=' + this.appid +'&q=';
  static response1; static weatherDates1; static minTemp1; static maxTemp1; static avgTemp1;
  constructor(private _httpC: HttpClient, private datepipe: DatePipe) { }
  getHistoryResponse(value) {
    let days = 7;
    let curDate = new Date();
    let endDate = this.datepipe.transform(curDate, 'yyyy-MM-dd');
    let startDate = this.datepipe.transform(curDate.setDate(curDate.getDate() - days), 'yyyy-MM-dd');    

    var apiUrl = this.url + value + '&format=json&date=' + startDate + '&enddate=' + endDate;
    
    return this._httpC.get(apiUrl)
      .toPromise().then(data => {        
        WorldweatherapiService.response1 = data['data'];
        WorldweatherapiService.weatherDates1 = data['data'].weather.map(res => res.date);
        WorldweatherapiService.minTemp1 = data['data'].weather.map(res => res.mintempC);
        WorldweatherapiService.maxTemp1 = data['data'].weather.map(res => res.maxtempC);
        WorldweatherapiService.avgTemp1 = data['data'].weather.map(res => res.avgtempC);        
      });
  }
}

