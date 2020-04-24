# WeatherForecast
Free Future Weather forecast upto 5 days and Past weather info for last 7 days. Using Chart.js for displaying graphs.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

# ScreenShots

Markup : ![picture alt](https://github.com/RahulGo8u/WeatherForecast/blob/master/resources/2_OutputCityDetails.jpg "City Details")

Markup : ![picture alt](https://github.com/RahulGo8u/WeatherForecast/blob/master/resources/3_OutputForecastDetails.jpg "Weather Forecast details")

Markup : ![picture alt](https://github.com/RahulGo8u/WeatherForecast/blob/master/resources/4_OutputLineGraph.jpg "Line Graph for past 7 days")


<b>Two APIs are used for fetching weather details:</b>

https://openweathermap.org/api :  This API is used to get Current & Forecast weather data collection. 

Currently 5 day / 3 hour forecast feature is used in this application. Its details are:

          * 5 day forecast is available at any location or city              
 
          * 5 day forecast includes weather data every 3 hours

          * Forecast is available in JSON and XML

          * Available for both Free and paid subscriptions

https://www.worldweatheronline.com/developer/ : World Weather Online’s weather API (application programming interface) allows developers and programmers to access current, past and future weather data for use in apps and on websites. Currently the days are set to 7 which is configurable.

## Development server
<b>Steps to Run:</b>

         1. Clone the Project

         2. Get your API key from https://openweathermap.org/api.

         3. Go to .\weather-forecast\src\app\api\weather-api.service.ts and update your API key.

         4. Get your API key from https://www.worldweatheronline.com/developer/.

         5. Go to .\weather-forecast\src\app\api\worldweatherapi.service.ts and enter your API key.

         6. Run the command npm install

         7. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
