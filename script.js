document.write("Hello, welcome to the world of JavaScript!");
console.log("This message is logged in the console.");





// let z="Hello";
// console.log(z);
// console.log(typeof(z));

// let myname=true;
// console.log(myname);
// console.log(typeof(myname));


// let p=null;
// console.log(p);


// let x= parseInt(prompt("Enter the value of x"));
// let y= parseInt(prompt("Enter the value of y"));
// let c=x+y;
// console.log(c);

// let d=x-y;
// console.log(d);

// let e=x*y;
// console.log(e);

// let f=x/y;
// console.log(f);

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

// let a=100
// let b=10

// console.log(a<b);
// console.log(a>b);
// console.log(a<=b);
// console.log(a>=b);

// console.log(a)
// console.log(b)

// console.log(a>b && a<30)
// console.log(a>b || a<30)


// console.log( ! a>b)

// console.log( ! a<b)


// //conditional statements: These statements are used to perform different actions based on different conditions. The conditional statements in JavaScript are:
// // 1. if statement is used to execute a block of code if a specified condition is true. The syntax of the if statement is as follows:
// // if (condition) {
// //     // code to be executed if condition is true
// // }
// // 2. if...else statement is used to execute a block of code if a specified condition is true, and another block of code if the condition is false. The syntax of the if...else statement is as follows:
// // if (condition) {
// //     // code to be executed if condition is true
// // } else {
// //     // code to be executed if condition is false
// // }
// // 3. if...else if...else statement is used to execute a block of code if a specified condition is true, and another block of code if the condition is false, and another block of code if the condition is false. The syntax of the if...else if...else statement is as follows:
// // if (condition1) {
// //     // code to be executed if condition1 is true
// // } else if (condition2) {
// //     // code to be executed if condition2 is true
// // } else {
// //     // code to be executed if both condition1 and condition2 are false
// // }
// // 4. switch statement is used to perform different actions based on different conditions. The syntax of the switch statement is as follows:
// // switch (expression) {
// //     case value1:
// //         // code to be executed if expression === value1
// //         break;
// //     case value2:
// //         // code to be executed if expression === value2
// //         break;
// //     ...
// //     default:
// //         // code to be executed if expression doesn't match any case
// // }

// let v=120
// let w=100

// console.log(v)
// console.log(w)
// if(v>w){
//     console.log("v is greater than w");

//     console.log("v is greater than w.....");
// }

// console.log("Hello World");

// //to take input from user and check the given number is positive or negative?

// let num= parseInt(prompt("Enter a number: "));
// console.log(num);
// if(num>0){
//     console.log("The number is positive");
// }
// else{
//     console.log("The number is negative");
// }

// let a = 100
// let b = 200
// let c = 300

// if(a>b && a>c){
//     console.log("a is greater");
// }
// else if(b>a && b>c){
//     console.log("b is greater");
// }
// else if(c>a && c>b){
//     console.log("c is greater");
// }
// else{
//     console.log("All are equal");
// }


// let marks = parseInt(prompt("Enter your marks: "));

// if(marks>=90 && marks<=100){
//     console.log("A");
// }
// else if(marks>=80 && marks<90){
//     console.log("B");
// }
// else if(marks>=70 && marks<80){
//     console.log("C");
// }
// else  {
//     console.log("Fail")
// }


//ternary operator in js.
//it is the shortest way to write an if-else statement.  

// a= 12
// b= 24
// c= 36
// greater= a>b>c? (a>b && a>c) ? a : (b>a && b>c) ? b : c : (b>c && b>a) ? b : (c>b && c>a) ? c : a
// console.log(greater );

//greater= a>b ? (b>c ? b : c) : (c>a ? c : a) explain its logic:
// The logic of the ternary operator in this case is as follows:

// 1. First, it checks if a is greater than b (a>b).
// 2. If a is greater than b, it then checks if b is greater than c (b>c).
//    - If b is greater than c, it returns b as the greatest value.
//    - If b is not greater than c, it returns c as the greatest value.
// 3. If a is not greater than b, it then checks if c is greater than a (c>a).
//    - If c is greater than a, it returns c as the greatest value.
//    - If c is not greater than a, it returns a as the greatest value.

// In summary, this ternary operator finds the greatest value among a, b, and c by using nested conditions.

//switch statement in js.
//syntax :
// switch (key) {
// case value:
//     // code block
//     break;
// case value:
//     // code block
//     break;
// default:
//     // code block
// }

// let day = parseInt(prompt("Enter a day:"))
// day = day % 7; // to make sure the input is between 1 and 7

// // day = day % 7; why was % used?
// // The modulus operator (%) is used to ensure that the input day is within the range of 1 to 7.

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }

//FOR LOOP IN JS
//syntax:
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

for(let i=1; i<=10; i++){
    console.log("Hello", i);
}
console.log("Done");

