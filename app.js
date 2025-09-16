// // Function Statement

// function greet(){
//     console.log("Greetings of the day!")
// }
// greet();  // invoking

// // functions are first class
// function logGreeting(fn){

// }
// logGreeting(greet());

// // Function expression, what is it?
// const fn = function(){
//     console.log("Function expression");
// }
// fn();

// // function expression on the fly, this mean?
//  function logGreeting(){

//  }
//  logGreeting(function(){
//     console.log("function expression on the fly")
//  })



// console.log("one");
// console.log("two");


// setTimeout(() => {
//     console.log("hello");
// }, 5000);

// console.log("three");
// console.log("four");

// const hello = () => {
//     console.log("hello");
// }

// setTimeout(hello, 3000);


//callback hell

// function getData(dataId, getNextData){
//   setTimeout(() => {
//       console.log("data", dataId);
//       if(getNextData){
//         getNextData();
//       }
//   }, 2000)
// }

// getData(1, () => {
//     console.log("getting data2.....");
//     getData(2, () => {
//          console.log("getting data3.....")
//         getData(3, () => {
//              console.log("getting data 4.....")
//             getData(4);
//         })
//     })
// });


//promises

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//    reject("some error");

// });


// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//          setTimeout(() => {
//       console.log("data", dataId);
//       reject("error");
//       if(getNextData){
//         getNextData();
//       }
//   }, 2000)
//     });
 
// }



// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("JavaScript promise")
//         resolve("success");
//         reject("error")
//     });
// }

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fullfilled", res);
// });

// promise.catch( () => {
//     console.log("rejected", err);
// })


// function asyncFunc1() {
//      return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1..");
//             resolve("sucess")
//         }, 4000)
//      });
// }

// function asyncFunc2() {
//      return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("sucess")
//         }, 4000)
//      });
// }

// console.log("fetching data1...");
// asyncFun1().then((res) => {
    
// console.log("fetching data2...");
//    asyncFunc2().then((res) => {
// });

// });

 function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
         setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      if(getNextData){
        getNextData();
      }
  }, 2000)
    });
 
}

//promise chain

// getData(1).then((res) => {
//     return getData(2);
// })
// .then((res) => {
//     return getData(3);
// })
// .then((res) => {
//   console.log("success");

// });

//callback hell
// getData(1, () => {
//     console.log("getting data2.....");
//     getData(2, () => {
//          console.log("getting data3.....")
//         getData(3, () => {
//              console.log("getting data 4.....")
//             getData(4);
//         })
//     })
// });


// async-await


async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}