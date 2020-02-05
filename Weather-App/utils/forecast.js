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
             precipType: response.body.currently.precipType, ///this data can be unavailable sometimes , depends on currently property
             summary: response.body.daily.data[0].summary,
             timezone: response.body.timezone
            })
            
        }
        
    })
}

module.exports = forecast;
