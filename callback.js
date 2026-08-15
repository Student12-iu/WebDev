function saybye(){
    console.log("Goodbye!");
}

function greet(name,callback){
    console.log("hello Good evening....",name)
    callback()
}

greet("Prathamesh",saybye);


// //settimeout (function,delay in ms) used to function after some time

// console.log("Starting....")

// setTimeout(function(){
//     console.log("This message is displayed after 5 seconds.");
// }, 5000)

// console.log("Ending....")

// let num1 = 10;
// let num2 = 20;

// console.log("Calculating in 5 seconds");

// setTimeout(function () {
//     let sum = num1 + num2;
//     console.log("Addition is: " + sum);
// }, 5000);

// async function fetchdata() {
//     let response=await fetch('https://fakestoreapi.com/products/1');
//     console.log(response);

//     let data=await response.json();
//     console.log(data);
// }

// fetchdata();

// async function fetchdata() {
//     try {
//         let response = await fetch('https://fakestoreapi.com/products/1');
//         console.log(response);

//         let data = await response.json();
//         console.log(data);
//     }
//     catch (error) {
//         console.log("Error:", error);
//     }
// }
// fetchdata();
