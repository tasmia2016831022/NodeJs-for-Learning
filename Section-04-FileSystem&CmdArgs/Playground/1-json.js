const fs = require("fs");

const book = {
  title: "Harry Potter and the goblet of fire",
  author: "J.K.Rowling"
};

const bookJSON = JSON.stringify(book);

const parsedData = JSON.parse(bookJSON);

fs.writeFileSync("1-json.json", bookJSON);
fs.appendFileSync("1-json.json", parsedData);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);
