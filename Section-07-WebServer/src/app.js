const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Hello express');
});

app.get('/help',(req,res) => {
   res.send(" Help Page"); 
});

app.get('/about',(req,res)=>{
    res.send('About page');
});

app.get('/weather',(req,res) => {
    res.send(" WEATHER APP ");
});



/// app.com
/// app.com/help
/// app/about


app.listen(3000, () => {
    console.log( " Server started 3000")
});
