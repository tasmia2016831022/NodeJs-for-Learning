const request = require('request');

const mapboxAT = `pk.eyJ1IjoidGFzbWlhIiwiYSI6ImNrNjd3MWVrdzBnY2Qza284cjI3bmFpMGsifQ.zrWV1-nUyqizb5yZc2YWBQ`;
const endpoint = `Dhaka`;
const limit = 1;
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${endpoint}.json?access_token=${mapboxAT}&limit=${limit}`;

request({
    url: url,
    json: true
},(error, response) =>{
    const location = response.body.query.join(' ');
    const lat = response.body.features[0].center[0];
    const long = response.body.features[0].center[1];
    
    console.log(`${location} is at latitude: ${lat} and longitude: ${long}`);
})