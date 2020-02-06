const chalk = require('chalk');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

geocode(process.argv[2],(error,{latitude, longitude, location}) => {
  if(error){
      console.log(error);
  }else if(process.argv[2] === undefined){
      console.log(chalk.red('No location provided!!'));
  }else{
    forecast(latitude, longitude, (error, ForecastData) => {
        if(error){
            return console.log(error);
        }
        console.log('Data', ForecastData);
        console.log(location);
      })
  }
    
});


