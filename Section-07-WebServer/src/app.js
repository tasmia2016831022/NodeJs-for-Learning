const express = require('express');
const geocode = require('../../Weather-App/utils/geocode');
const forecast = require('../../Weather-App/utils/forecast');
const path = require('path');
const hbs = require('hbs');

const app = express();

/// Define paths for Express Config
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

/// Setup Handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views',viewsPath);

hbs.registerPartials(partialsPath);

/// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'Linuxz'
    });
});

app.get('/help',(req,res) => {
   res.render('help',{
       title: "Help Page",
       message :'This is a help page!!'
   }); 
});

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About Me',
        name: 'Linuxs'
    });
});

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


app.listen(3000, () => {
    console.log( " Server started 3000")
});
