"use strict"

const { log } = require('console');
const fs = require('fs')

try {
    const data = fs.readFileSync('./test.csv', 'utf8')
    console.log(data);
} catch (err) {
  console.error(err);
}

console.log("qui finisce il programma");