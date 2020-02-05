const add = (a,b,callback)=>{
    setTimeout(() =>{
        const sum = a+b;
        callback(sum);
    },2000)
};

add(1,2,(sum)=>{
    console.log(sum);
})   
