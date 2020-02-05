const request = require('request');
const token = require('./tokens.js');

const forecast = (lat,long, callback) => {
    const lang = 'en';
    const forcastURL = `https://api.darksky.net/forecast/${token.darkSkyT}/${long},${lat}?lang=${lang}`;
    
    request({
        url: forcastURL,
        json: true
    }, (error, response) => {
        
        if(error){
            callback(error,undefined);
        }else if(response.body.error){
            callback(response.body.error,undefined);
        }else{
            callback(undefined,{
             temperature: response.body.currently.temperature,
             percentage: (response.body.currently.precipProbability) * 100,
             precipType: response.body.currently.precipType,
             summary: response.body.daily.data[0].summary
            })
            
        }
        
    })
}

module.exports = forecast;




















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