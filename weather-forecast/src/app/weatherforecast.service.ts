import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { debounceTime, map, distinctUntilChanged, switchMap } from 'rxjs/operators';



@Injectable()
export class WeatherForecastService {

    baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
    queryUrl: string = '?q=';
    endUrl: string = '&units=metric&appid=110ff02ed24ccd819801248373c3b208';
  
    constructor(private http: HttpClient) 
    { 
        
    }
    search(terms: Observable<string>) {
        return terms.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.searchEntries(term));
    }
    
    searchEntries(term) {
        return this.http
            .get(this.baseUrl + this.queryUrl + term + this.endUrl)
            .map(res => res.json());
    }
    
}
