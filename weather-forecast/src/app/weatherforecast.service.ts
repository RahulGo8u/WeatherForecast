import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class WeatherForecastService {

    baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
    queryUrl: string = '?q=';
    endUrl: string = '&units=metric&appid=110ff02ed24ccd819801248373c3b208';
  
    constructor(private http: HttpClient) 
    { }
    
}
