const request = require('request');

const url = 'https://api.darksky.net/forecast/be80abcef967d716159ce841ccb5516f/23.7937,90.4107';

request({
    url: url,
    json: true
} , (error, response) => {
    console.log(response.body.timezone)
})