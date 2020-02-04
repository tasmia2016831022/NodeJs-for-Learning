const request = require('request');

const url = 'https://api.darksky.net/forecast/be80abcef967d716159ce841ccb5516f/63.0937,90.4107';

request({
    url: url,
    json: true
} , (error, response) => {
    const temperature = response.body.currently.temperature;
    const percentage = (response.body.currently.precipProbability) * 100;
    const precipType = response.body.currently.precipType;
    console.log(`This is ${temperature} degree now. there's a ${percentage} % chance of ${precipType}ing`)
})