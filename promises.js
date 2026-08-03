//promises in js is an object that represents eventual result of an asynchronous operation. Asynchronous operation means API calling, file reading, timer.
let promise = new Promise(function(resolve, reject) {
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;
    resolve(sum);
});

let promise2 = new Promise((resolve, reject)=>{
let success = true
    if(success){
        resolve("promise is resolved successfully")}

    else{
        reject("promise is rejected")}
});

promise2.then(result => {
    console.log(result)
}).catch(error =>{
    console.log(error)
}).finally(()=>{
    console.log("promise is completed")
})



