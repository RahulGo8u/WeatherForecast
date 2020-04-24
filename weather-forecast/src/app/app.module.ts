import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { WeatherAPIService } from './api/weather-api.service';
import { TableComponent } from './table/table.component';
import { CityComponent } from './city/city.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent,
    TableComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [WeatherAPIService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
