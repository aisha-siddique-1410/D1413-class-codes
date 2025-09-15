// Export a class

export default class User {  //ES6
   constructor(name){
    this.name=name;
   }

   greet(){
     return `Hello, ${this.name}` 
   }
}

// module.exports = User; // common js