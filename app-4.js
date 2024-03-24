//These are the 2 usefull method to use to read file and create file from the scratch using node.js

// const {readFileSync} = require('fs');
// const fs = require('fs');
// fs.read
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
// console.log(first, second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`, 
    { flag: 'a' }
)