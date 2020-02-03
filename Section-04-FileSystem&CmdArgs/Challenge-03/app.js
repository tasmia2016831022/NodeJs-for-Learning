const fs = require('fs');

//Load and parse 

const dataBuffer = fs.readFileSync('challenge03.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

// Change data property
 user.name = 'Simon';
 user.age = 40;

 //Stringify and overwrite 

 data = JSON.stringify(user);
 fs.writeFileSync('challenge03.json',data);



 