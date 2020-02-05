const chalk = require('chalk');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

geocode('Dhaka',(error,data) => {
  if(error){
      console.log(error);
  }
    forecast(data.latitude, data.longitude, (error, ForecastData) => {
        if(error){
            return console.log(error);
        }
        console.log('Data', ForecastData);
      })
});


