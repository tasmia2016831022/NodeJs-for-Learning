const request = require('request');

const url = 'https://api.darksky.net/forecast/be80abcef967d716159ce841ccb5516f/23.7,90.36667?lang=bn';

request({
    url: url,
    json: true
} , (error, response) => {
    if(error){
        console.log(error);
    }else{
        const temperature = response.body.currently.temperature;
        const percentage = (response.body.currently.precipProbability) * 100;
        const precipType = response.body.currently.precipType;
        const summary = response.body.daily.data[0].summary;
        console.log(`${summary} This is ${temperature} degree now. there's a ${percentage} % chance of ${precipType}ing`)
    }
})

const mapboxAT = `pk.eyJ1IjoidGFzbWlhIiwiYSI6ImNrNjd3MWVrdzBnY2Qza284cjI3bmFpMGsifQ.zrWV1-nUyqizb5yZc2YWBQ`;
const endpoint = `Dhaka`;
const limit = 1;
const mapurl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${endpoint}.json?access_token=${mapboxAT}&limit=${limit}`;

request({
    url: mapurl,
    json: true
},(error, response) =>{
    if(error){
        console.log(error);
    }else{
        const location = response.body.query.join(' ');
        const lat = response.body.features[0].center[0];
        const long = response.body.features[0].center[1];
        
        console.log(`${location} is at latitude: ${lat} and longitude: ${long}`);
    }
})


