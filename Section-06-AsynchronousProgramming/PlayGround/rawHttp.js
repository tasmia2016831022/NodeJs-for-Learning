const https = require('https');
const token = require('../../Weather-App/utils/tokens');

const lat = 90.6667, long = 23.7, lang ='en';
const url = `https://api.darksky.net/forecast/${token.darkSkyT}/${long},${lat}?lang=${lang}`;


const request = https.request(url, (response) => {
    
    let data = '';
    
    response.on('data', (chunk)=>{
        
        data = data + chunk.toString();
    })
    response.on('end',()=>{
        console.log(JSON.parse(data));
    })
})

request.on('error', (error) =>{
    console.log(error);
})

request.end();