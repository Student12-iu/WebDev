//async and await
//async and await are used to handle asynchronous operations in JavaScript.
//  They allow you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.

// The async keyword is used to declare a function as asynchronous.
//  It allows you to use the await keyword inside the function to pause the execution of the function until a Promise is resolved or rejected.


// async function myfunction(){
//     return "hello"
// }

// myfunction().then(result=>{  console.log(result)}).catch(error=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("promise is completed")
// })

async function myfunction(){
    let result = await Promise.resolve("Promise is resolved");

    return result;
}
myfunction().then(result=>{  console.log(result)}).catch(error=>{
    console.log(error)
}).finally(()=>{
    console.log("promise is completed")
})

