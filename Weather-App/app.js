const request = require('request');
const chalk = require('chalk');
const token = require('./utils/tokens');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

// const url = `https://api.darksky.net/forecast/${token.darkSkyT}/23.7,90.36667?lang=bn`;

// request({
//     url: url,
//     json: true
// } , (error, response) => {
//     if(error){
//         console.log(error);
//     }else if(response.body.error){
//         console.log(response.body.error);
//     }else{
//         const temperature = response.body.currently.temperature;
//         const percentage = (response.body.currently.precipProbability) * 100;
//         const precipType = response.body.currently.precipType;
//         const summary = response.body.daily.data[0].summary;
//         console.log(`${summary} This is ${temperature} degree now. there's a ${percentage} % chance of ${precipType}ing`)
//     }
// })

// const endpoint = `Dhaka`;
// const limit = 1;
// const mapurl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${endpoint}.json?access_token=${token.MapBoxAT}&limit=${limit}`;

// request({
//     url: mapurl,
//     json: true
// },(error, response) =>{
//     if(error){
//         console.log(error);
//     }else if(response.body.message){
//         console.log(chalk.red(response.body.message));
//     }else{
//         const location = response.body.query.join(' ');
//         const lat = response.body.features[0].center[0];
//         const long = response.body.features[0].center[1];
        
//         console.log(`${location} is at latitude: ${lat} and longitude: ${long}`);
//     }
// })




geocode('Dhaka',(error,data) => {
    console.log(`Error`,error);
    console.log(`Data`,data);
});


forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })