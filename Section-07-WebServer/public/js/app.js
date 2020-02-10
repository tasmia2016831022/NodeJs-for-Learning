
console.log('Client side js file loaded!!');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const loc = document.querySelector('#location');
const temp = document.querySelector('#temperature');
const summery = document.querySelector('#summery');

// loc.textContent = '';
// temp.textContent = '';

weatherForm.addEventListener('submit', (e)=>{
   e.preventDefault();
   
   const location = search.value;
   
   loc.textContent ="LOADING...."
   
   fetch(`http://localhost:3000/weather?address=${location}`).then(response =>{
    response
    .json()
    .then((data) => {
        if(data.error){
            loc.textContent = 'Error occured.' + data.error;
        }else{
            console.log(data);
            loc.textContent = location;
            temp.textContent = `Temperature: ${data.temperature}`;
            if(data.precipType === undefined){
                summery.textContent = `Summary: ${data.summary}`;
            }else{
                summery.textContent = `Summary: ${data.summary}${data.percentage}% chance of ${data.precipType}.`;
            }
        }
    })
})
})