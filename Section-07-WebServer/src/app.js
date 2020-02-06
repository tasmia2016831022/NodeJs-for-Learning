const express = require('express');
const geocode = require('../../Weather-App/utils/geocode');
const forecast = require('../../Weather-App/utils/forecast');
const path = require('path');

const app = express();
const publicDirectoryPath = path.join(__dirname,'../public');

app.use(express.static(publicDirectoryPath));

// app.get('', (req, res) => {
//     res.send('Hello express');
// });

// app.get('/help',(req,res) => {
//    res.send({
//        name: "Arya",
//        age : 21
//    }); 
// });

// app.get('/about',(req,res)=>{
//     res.send('<h1 align = "center"> About Page </h1>');
// });

// app.get('/weather',(req,res) => {
//     res.send(
//           ForecastData
//     );
// });

geocode('Dhaka',(error,{latitude, longitude, location}) => {
        if(error){
            console.log(error);
        }else{
            forecast(latitude, longitude, (error, ForecastData) => {
            if(error)return console.log(error);
            
                app.get('/weather',(req,res) => {
                    res.send(
                        ForecastData
                    );
                });
            })
        }
  });

/// app.com
/// app.com/help
/// app/about


app.listen(3000, () => {
    console.log( " Server started 3000")
});
