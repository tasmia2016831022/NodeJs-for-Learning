const request = require('request');
const token = require('./tokens.js');

const geocode = (endpoint, callback) => {
    const limit = 1;
    const mapurl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${endpoint}.json?access_token=${token.MapBoxAT}&limit=${limit}`;
    
    request({
        url: mapurl,
        json: true
    }, (error,response) => {
        if(error){
            console.log(error);
        }else if(response.body.message){
            console.log(chalk.red(response.body.message));
        }else{
            callback(undefined,{
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
   
}

module.exports = geocode;