//********if else statement */
// let hour = 14;

// if (hour >= 6 && hour < 12) console.log("Good Morning!");
// else if (hour >= 12 && hour < 18) console.log("Good Afternoon!");
// else console.log("Good Evening!");

//********switch statement */
// let role = "Outsider";
// switch (role) {
//     case "guest":
//         console.log("Guest User");
//         break;
//     case "moderator":
//         console.log("Moderator User");
//         break;
//     default:
//         console.log("Normal User");
// }

//********for loop */
// for (let i = 0; i < 5; i++) {
//     console.log("Hello World");
// }

//********while loop*/
// let i = 0;
// while (i < 5) {
//     console.log("while loop");
//     i++;
// }

//********do while  */
// let i = 1;
// do {
//     if (i % 2 == 0) console.log(i);
//     i++;
// } while (i < 10);

//********for...in loop */
//*****Example 1 */
// const person = {
//     name: "Sagar",
//     address: "Budanilkantha",
// };

// for (key in person) console.log(key, person[key]);

//*****Example 2 */
// const color = ["red", "blue", "green"];
// for (let index in color) console.log(index, color[index]);

//*****for...of loop */
// const colors = ["red", "blue", "green"];
// for (let color of colors) console.log(color);

//*****Q1.a) Max of two number */
// let number = max(9, 13);
// console.log(number);

// function max(a, b) {
//     if (a > b) return a;
//     else return b;
// }

//*****Q1.b) Max of two number using Conditional (ternary) operator */
// let number = max(2, 7);
// console.log(number);

// function max(a, b) {
//     return a > b ? a : b;
// }

//*****Q1.c) Find out landscape or potrait mode */

// let mode = isLandscape(1000, 300);
// function isLandscape(width, height) {
//     if (width > height) console.log("Landscape");
// }

//*****Writing Better Code */
// console.log(isLandscape(800, 500));
// function isLandscape(width, height) {
//     return width > height;
// }

//*****Q2) FizzBuzz Problem */
//Divisible by 3=>Fizz
//Divisible by 5=>Buzz
//Divisible by both 3 and 5 =>FizzBuzz
//Not divisible by 3 and 5 =>input
//Not a number => 'Not a number'

// const output = fizzBuzz(false);
// console.log(output);

// function fizzBuzz(input) {
//     // Bad Code
//     // if (input % 3 == 0 && input % 5 != 0) console.log("Fizz");
//     // else if (input % 5 == 0 && input % 3 != 0) console.log("Buzz");
//     // else if (input % 5 == 0 && input % 3 == 0) console.log("FizzBuzz");
//     // else if (input % 5 != 0 && input % 3 != 0) console.log(input);
//     // else return "Not a number";
//     //Good code
//     // if (typeof input !== "number") return NaN;
//     // if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//     // if (input % 3 === 0) return "Fizz";
//     // if (input % 5 === 0) return "Buzz";
//     // return input;
// }

//Q3) Sum of Multiple of 3 and 5
// console.log(sum(50));
// function sum(limit) {
//     let num = 0;
//     for (let i = 0; i <= limit; i++)
//         if ((i % 3 === 0) | (i % 5 === 0)) num += i;

//     return num;
// }

//Q4) Printing Stars
// showStar(10);
// function showStar(rows) {
//     for (let row = 0; row < rows; row++) {
//         let pattern = "";
//         for (let i = 0; i < row; i++) pattern += "*";
//         console.log(pattern);
//     }
// }

//Q5) Printing Prime Numbers
// showPrimes(20);
// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++) {
//         let isPrime = true;
//         for (let factor = 2; factor < number; factor++) {
//             if (number % factor == 0) isPrime = false;
//             break;
//         }
//         if (isPrime === true) console.log(number);
//     }
// }

// Better Approch of showing prime
showPrimes(20);
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) console.log(number);
    }
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor == 0) return false;

    return true;
}
