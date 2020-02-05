const geocode = (address,callback) => {
    setTimeout(() => {
        const data = {
            lat: 1,
            long: 2
        }
        
        callback(data)
    },2000)
}

geocode('Dhaka',(data) =>{
    console.log(data);
})