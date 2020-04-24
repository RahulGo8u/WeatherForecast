# WeatherForecast
Free Future Weather forecast upto 5 days and Past weather info for last 7 days. Using Chart.js for displaying graphs.



<b>Two APIs are used for fetching weather details:</b>

https://openweathermap.org/api :  This API is used to get Current & Forecast weather data collection. 

Currently 5 day / 3 hour forecast feature is used in this application. Its details are:

          * 5 day forecast is available at any location or city              
 
          * 5 day forecast includes weather data every 3 hours

          * Forecast is available in JSON and XML

          * Available for both Free and paid subscriptions

https://www.worldweatheronline.com/developer/ : World Weather Online’s weather API (application programming interface) allows developers and programmers to access current, past and future weather data for use in apps and on websites. Currently the days are set to 7 which is configurable.

<b>Steps to Run:</b>

         1. Clone the Project

         2. Get your API key from https://openweathermap.org/api.

         3. Go to .\weather-forecast\src\app\api\weather-api.service.ts and update your API key.

         4. Get your API key from https://www.worldweatheronline.com/developer/.

         5. Go to .\weather-forecast\src\app\api\worldweatherapi.service.ts and enter your API key.

         6. Run the command npm install

         7. Run the command ng serve --port 333
