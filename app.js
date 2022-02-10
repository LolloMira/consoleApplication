"use strict"

const { log } = require('console');
const fs = require('fs');

const {Parser, PartialInvalidStringError, InvalidStringError, EmptyStringError} = require('./parser2.js');

console.log(process.argv.slice(2));

const arg = process.argv.slice(2);

const fileToRead = arg[0];

const fileToWrite = arg[1];


let array

try {
    const data = fs.readFileSync(fileToRead, 'utf8');
    array = Parser.csvParse(data);
    console.log(data);
    console.log(array);

    //let sum = array.reduce((p,c)=>p+c)

    //console.log(sum);
} catch (err) {
  console.error(err);
}



try {
      fs.writeFileSync(fileToWrite, JSON.stringify(array));
} catch (error) {
      console.log(error);
}

console.log("qui finisce il programma");