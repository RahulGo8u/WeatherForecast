import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-forecast';

  //City Array
  cityArray = [];

  //Search City function which takes value as City name and push to array
  searchCity(value) {
    this.cityArray.push(value)
    console.log(this.cityArray)
  }
}