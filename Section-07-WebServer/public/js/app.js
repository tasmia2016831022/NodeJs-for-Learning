
console.log('Client side js file loaded!!');

// fetch('http://puzzle.mead.io/puzzle').then((response) =>{
//     response.json().then((data) =>{
//         console.log(data);
//     })
// })
     
     fetch(`http://localhost:3000/weather?address='Dhaka'`).then(response =>{
         response
         .json()
         .then((data) => {
             if(data.error){
                 console.log(data.error)
             }else{
                 console.log(data);
             }
         })
     })