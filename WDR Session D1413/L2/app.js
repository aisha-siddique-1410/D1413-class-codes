// Import a single function

// const add = require('./math')
// console.log(add(5,4));

// Import multiple functions

// const math = require('./math')
// console.log(math.add(5,4));
// console.log(math.subtract(10,5));


// const User = require('./user');
// const user1 = new User('Aisha');
// console.log(user1.greet());


// const{square, cube} = require('./math')
// console.log(square(4));
// console.log(cube(3));

// ES6 : EcmaScript 6 (ES Module)

// import User from "./user";

// const user1 = new User('Aisha');
// console.log(user1.greet());

// import {add, sub} from "./math.js";
// console.log(sub(10,5));
// console.log(add(2,3));

// import {add} from "./math.js";

// Fs module

const fs = require('fs');

// fs.writeFile('abc.txt', 'Hello Students! This is FS module', (err) => {
//     if(err){
//         console.error('error writing file', err);
//     } else {
//         console.log('File written successfully');
//     }

// });

// fs.writeFile("example.txt", "hello World!", () => {
//     console.log("file successfully written");
// });

// fs.readFile("hello.txt", "utf-8", (err, data) => {
//     if(err) {
//         console.log("File not found")
//     }else {
//          console.log("File Data : ", data)
//     }
// });
 

// fs.appendFile('abc.txt', '\n this line was added', () => {
//     console.log("new content added")
// })

// fs.unlink('example.txt', function ()  {
    
// })

// fs.rename('abc.txt', 'new.txt', function (){

// });

fs.writeFile("demo.txt", "hello world", () => {

} );