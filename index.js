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

//*****for...of loop only for itterables*/
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
// showPrimes(20);
// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++) {
//         if (isPrime(number)) console.log(number);
//     }
// }

// function isPrime(number) {
//     for (let factor = 2; factor < number; factor++)
//         if (number % factor == 0) return false;

//     return true;
// }

//Array

//Adding Arrays
// const number = [3, 4];
// number.push(5, 6);
// number.unshift(1, 2);
// number.splice(2, 0, "a", "b");
// console.log(number);

//Finding a object, object is reference type
// const courses = [
//     { id: 1, name: "a" },
//     { id: 2, name: "b" },
// ];

// const course = courses.find((course) => course.name === "a");
// console.log(course);

// //*******Removing Elements******/
// const numbers = [1, 2, 3, 4, 5];

// //End
// // const last = numbers.pop();
// // console.log(last);

// //Begining
// // const first = numbers.shift();
// // console.log(numbers);

// //Middle
// numbers.splice(3, 2);
// console.log(numbers);

// let numbers = [1, 2, 3, 4, 5];
// let another = numbers;

// //Solution 1
// numbers = [];

//Solution 2
// numbers.length = 0;
// console.log(numbers);

//Solution 3
// numbers.splice(0, numbers.length);
// console.log(numbers);

// //Solution 4
// while (numbers.length > 0) {
//     numbers.pop();
// }
// console.log(numbers);

// Combining and Slicing Arrays [Here values are copied]
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// console.log(combined);

// const slice = combined.slice(3);
// console.log(slice);

//***** Combining and Slicing Arrays [Here References is combined] */
// const first = [{ id: 1 }];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// first[0].id = 10;
// console.log(combined);

// const slice = combined.slice(3);
// console.log(slice);

//*******[BETTER APPROCH] Combining and splicing arrays using spread operator */
// const first = [{ id: 1 }];
// const second = [4, 5, 6];

// const combined = [...first, "a", ...second, "b"];
// console.log(combined);

// const copy = [...combined];
// console.log(copy);

//******Itterating ana array */
// const numbers = [3, 4, 5];
// const numbers = [
//     { id: 201, name: "Teachers room" },
//     { id: 301, name: "Administation Block" },
// ];

// for (let number of numbers) console.log(number);

// numbers.forEach((number, index) => console.log(`[${index}]=>`, number));

//********Joining Arrays */
// const numbers = [3, 4, 5, 6];
// const joined = numbers.join("-");
// console.log(joined);

// const message = "This is my first message";
// const parts = message.split(" ");
// console.log(parts);

// const combined = parts.join("-");
// console.log(combined);

//********Sorting Arrays */

//********Sorting albhabetically ascending */
// const names = ["apple", "cat", "banana"];
// // names.sort();
// // console.log(names);
// //********Sorting albhabetically descending- first sort in ascending then reverse it */
// names.sort();
// names.reverse();
// console.log(names);

//********Sorting Numbers in  ascending */

// const numbers = [4, 2, 11, 1, 23];
// // numbers.sort((a, b) => a - b); //function should return -ve if 1st number is smaller, 0 if equal and +ve otherwise
// // console.log(numbers);

// //********Sorting Number in descending order */
// numbers.sort((a, b) => b - a);
// console.log(numbers);

//********Sorting objects */
// const courses = [
//     { id: 1, name: "Nodejs" },
//     { id: 2, name: "javascript" },
// ];
// courses.sort(function (nameA, nameB) {
//     //return -1 if a<b
//     //return 1 if a>b
//     //return o if a=b
//     nameA = nameA.name.toLowerCase();
//     nameB = nameB.name.toLowerCase();
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// });

// console.log(courses);

//********Testing some and every*///
//some()-atleast one true=>true
//every()-every element true=>true ,otherwise false

// const number = [1, -2, 3, 4];
// const atLeastOnePositive = number.every(function (value) {
//     return value >= 0;
// });
// console.log(atLeastOnePositive);

//********Filtering */
// const numbers = [2, 3, -4, 1, 5];
// const filteredNumber = numbers.filter((number) => number >= 0);
// console.log(filteredNumber);

//********Filter and Map chaining */
//We can chain map and filter method
// const numbers = [2, 3, -4, 1, 5];
// const items = numbers
//     .filter((n) => n >= 0)
//     .map((n) => ({
//         value: n,
//     }))
//     .filter((obj) => obj.value > 1);

// console.log(items);

//********Reducing an array */

//Counting an array using loop
// const numbers = [2, 3, -4, 50, 2];
// let sum = 0;
// for (let n of numbers) sum += n;
// console.log(sum);

//counting an array using reduce function
// const numbers = [2, 3, -4, 50, 2];
// const sum = numbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(sum);

//Sample exercise

// const numbers = arrayFromRange(-1, 5);
// console.log(numbers);
// function arrayFromRange(min, max) {
//     let requiredArray = [];
//     for (let i = min; i <= max; i++) requiredArray.push(i);

//     return requiredArray;
// }

//Search element
// const numbers = [2, 3, -4, 50, 2];

// console.log(includes(numbers, -2));
// function includes(array, searchElement) {
//     for (let element of array) if (element === searchElement) return true;
//     return false;
// }

//Exclued the certain element of an array
// const numbers = [3, 2, 5, 53];
// const output = except(numbers, [3, 2]);
// console.log(output);
// function except(array, excluded) {
//     const output = [];
//     for (let element of array) {
//         if (!excluded.includes(element)) {
//             output.push(element);
//         }
//     }
//     return output;
// }

// //Moving an Element
// const numbers = [10, 5, 15, 40, 55];
// const output = move(numbers, 2, 2);
// console.log(output);
// function move(array, index, offset) {
//     const position = index + offset;
//     if (position >= array.length || position < 0) {
//         console.log("Invalid offset.");
//         return;
//     }
//     const output = [...array];
//     const element = output.splice(index, 1)[0];
//     output.splice(position, 0, element);
//     return output;
// }

//Count Occurances
// const numbers = [10, 5, 15, 40, 5, 5];

// const count = countOccurances(numbers, 5);
// console.log(count);

// function countOccurances(array, searchElement) {
//     let count = 0;
//     for (let element of array) {
//         if (searchElement === element) ++count;
//     }
//     return count;
// }

//Count Occurances using reduce function

// const numbers = [10, 5, 15, 40, 5, 5];

// const count = countOccurances(numbers, 5);
// console.log(count);

// function countOccurances(array, searchElement) {
//     return array.reduce((accumulator, current) => {
//         const occurance = current === searchElement ? 1 : 0;
//         return accumulator + occurance;
//     }, 0);
// }

//Get maximum number of an array
// const numbers = [1, 2, 43, 23, 44, 5, 84];

// const max = getMax(numbers);
// console.log(max);
// function getMax(array) {
//     array.sort((a, b) => b - a);
//     return array[0];
// }

// //Getting the maximum number from an array
// const numbers = [1, 2, 43, 23, 44, 5, 84];

// const max = getMax([2, 3, 1, 5, 65]);
// console.log(max);
// function getMax(array) {
//     if (array.length === 0) return undefined;
//     return array.reduce((a, b) => (a > b ? a : b));
// }

/********Sorting movies by year and rating
 */

//All the movies in 2018 with rating >4
//Sort them by their rating
//Descending order
//Pick their title

// const movies = [
//     { title: "a", year: 2018, rating: 4.5 },
//     { title: "b", year: 2018, rating: 4.7 },
//     { title: "c", year: 2018, rating: 3 },
//     { title: "d", year: 2017, rating: 4.5 },
// ];
// const output = movies
//     .filter((m) => m.year === 2018 && m.rating >= 4)
//     .sort((a, b) => b.rating - a.rating)
//     .sort((a, b) => a.title - b.title)
//     .map((m) => m.title);
// console.log(output);

//Function Declarations vs Expressions

/*
Hoisting => declaration of functions, variables or classes 
to the top of their scope, 
prior to execution of the code.

*/

// //Function Declaration
// walk();
// function walk() {
//     console.log("Walk");
// }

// run();
// //Anonymous Function Expression
// let run = function () {
//     console.log("run");
// };

//put any number of parameter and sum using arguments;
// function sum() {
//     let total = 0;
//     console.log(arguments);
//     for (let value of arguments) total += value;
//     return total;
// }

// console.log(sum(2, 4, 6, 8, 10));

//The Rest Operator
// function sum(discount, ...args) {
//     const total = args.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }
// console.log(sum(0.1, 20, 30));

//Default parameters
// function interest(principal, rate = 3.5, years = 5) {
//     //write the default parameter at last or give default parameters if prevous value is given
//     return (principal * rate * years) / 100;
// }
// console.log(interest(10000));
// console.log(interest(10000, undefined, 10)); //Not recommended

//Getters and Setters
// const person = {
//     firstName: "Sagar",
//     lastName: "Khadka",
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`;
//     },
//     set fullName(value) {
//         const parts = value.split(" ");
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     },
// };

// person.fullName = "Sajan Khatri";
// console.log(person);

//Try and Catch
// const person = {
//     firstName: "Sagar",
//     lastName: "Khadka",
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`;
//     },
//     set fullName(value) {
//         if (typeof value !== "string") throw new Error("Value is not a string");
//         const parts = value.split(" ");
//         if (parts.length !== 2) throw new Error("Enter a first and last name");
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     },
// };

// try {
//     person.fullName = "";
// } catch (e) {
//     alert(e);
// }
// console.log(person);

//Let vs Var
// function start() {
//     for (var i = 0; i < 5; i++) console.log(i);
//     console.log(i);
// }

// start();
//var  is function scoped
//ES9(ES2015): let,const => block-scoped
//avoid using var keyword
//function defined here is also global scoped which can be accessed from the window object

//this keyword

/*This refrences the object that is executing the current function. */
// method=> obj
//function=>global object(window,global), global object in node

//Example 1
// const video = {
//     title: "a",
//     play() {
//         console.log(this);
//     },
// };

// video.stop = function () {
//     console.log(this);
// };

// video.stop();

//Example 2
// function playVideo() {
//     console.log(this);
// }
// playVideo(); //this refrences the global object

//Example 3
// function Video(title) {
//     this.title = title;
//     console.log(this);
// }
// const v = new Video("b");

//Example 4
// const video = {
//     title: "a",
//     tags: ["sajan", "sagar", "roshan"],
//     showTags() {
//         this.tags.forEach(function (tags) {
//             console.log(this.title, tags);
//         }, this);
//     },
// };
// video.showTags();

//Example 5  (3 approachs)

//Approach 1(Not recomended)
// const video = {
//     title: "a",
//     tags: ["sajan", "sagar", "roshan"],
//     showTags() {
//         const self = this;
//         this.tags.forEach(function (tags) {
//             console.log(self.title, tags);
//         });
//     },
// };
// video.showTags();

//Approach 2(Not recomended)
// function playVideo() {
//     console.log(this);
// }
// playVideo.call({ name: "Mosh" }, 1, 2); //calls playVideo object
// playVideo.apply({ name: "Sagar" }[(1, 2)]);
//bind() method is also similar
// playVideo(); //calls global object

//Approach 2 (Different implementation)
// const video = {
//     title: "a",
//     tags: ["sajan", "sagar", "roshan"],
//     showTags() {
//         const self = this;
//         this.tags.forEach(
//             function (tags) {
//                 console.log(self.title, tags);
//             }.bind(this)
//         );
//     },
// };
// video.showTags();

//Approach 3 (Recomended)
// const video = {
//     title: "a",
//     tags: ["sajan", "sagar", "roshan"],
//     showTags() {
//         const self = this;
//         this.tags.forEach((tag) => console.log(self.title, tag));
//     },
// };
// video.showTags();

/*Function Exercise */

//Exercise 1
//sum of arguments and array
// console.log(sum([1, 2, 3, 4, 5, 6]));

// function sum(...items) {
//     if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
//     return items.reduce((a, b) => a + b);
// }

//Area of circle
// const circle = {
//     radius: 1,
//     get area() {
//         return Math.PI * this.radius * this.radius;
//     },
// };
// circle.radius = 10;
// console.log(circle.area);

//Throwing and catching error
// try {
//     const numbers = [1, 2, 3, 4];
//     const count = countOccurances(null, 1);
//     console.log(count);
// } catch (e) {
//     console.log(e.message);
// }
// function countOccurances(array, searchElement) {
//     if (!Array.isArray(array)) throw new Error("Invalid array.");
//     return array.reduce((accumulator, current) => {
//         const occurance = current === searchElement ? 1 : 0;
//         return accumulator + occurance;
//     }, 0)


///Testing on mobile
console.log("Testing on mobile")