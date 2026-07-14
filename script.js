document.write("Hello, welcome to the world of JavaScript!");
console.log("This message is logged in the console.");





let z="Hello";
console.log(z);
console.log(typeof(z));

let myname=true;
console.log(myname);
console.log(typeof(myname));


let p=null;
console.log(p);


let x= parseInt(prompt("Enter the value of x"));
let y= parseInt(prompt("Enter the value of y"));
let c=x+y;
console.log(c);

let d=x-y;
console.log(d);

let e=x*y;
console.log(e);

let f=x/y;
console.log(f);

//paraint is a function that is used to convert a string into an integer. It takes a string as an argument and returns an integer value. 
// If the string cannot be converted into an integer, it returns NaN (Not a Number).

//conditional operators: These operators are used to compare two values and return a boolean value (true or false) based on the comparison.
//  The conditional operators in JavaScript are:
// 1. == (equal to)
// 2. != (not equal to)
// 3. > (greater than)
// 4. < (less than)
// 5. >= (greater than or equal to)
// 6. <= (less than or equal to)

let a=100
let b=10

console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);

console.log(a)
console.log(b)

console.log(a>b && a<30)
console.log(a>b || a<30)


console.log( ! a>b)

console.log( ! a<b)


//conditional statements: These statements are used to perform different actions based on different conditions. The conditional statements in JavaScript are:
// 1. if statement is used to execute a block of code if a specified condition is true. The syntax of the if statement is as follows:
// if (condition) {
//     // code to be executed if condition is true
// }
// 2. if...else statement is used to execute a block of code if a specified condition is true, and another block of code if the condition is false. The syntax of the if...else statement is as follows:
// if (condition) {
//     // code to be executed if condition is true
// } else {
//     // code to be executed if condition is false
// }
// 3. if...else if...else statement is used to execute a block of code if a specified condition is true, and another block of code if the condition is false, and another block of code if the condition is false. The syntax of the if...else if...else statement is as follows:
// if (condition1) {
//     // code to be executed if condition1 is true
// } else if (condition2) {
//     // code to be executed if condition2 is true
// } else {
//     // code to be executed if both condition1 and condition2 are false
// }
// 4. switch statement is used to perform different actions based on different conditions. The syntax of the switch statement is as follows:
// switch (expression) {
//     case value1:
//         // code to be executed if expression === value1
//         break;
//     case value2:
//         // code to be executed if expression === value2
//         break;
//     ...
//     default:
//         // code to be executed if expression doesn't match any case
// }

let v=120
let w=100

console.log(v)
console.log(w)
if(v>w){
    console.log("v is greater than w");

    console.log("v is greater than w.....");
}

console.log("Hello World");

//to take input from user and check the given number is positive or negative?

let num= parseInt(prompt("Enter a number: "));
console.log(num);
if(num>0){
    console.log("The number is positive");
}
else{
    console.log("The number is negative");
}




