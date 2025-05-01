// console.log(Math);


// const num1 = 21.5
// console.log(Math.round(num1))
// console.log(Math.abs(num1))
// console.log(Math.ceil(num1))
// console.log(Math.floor(num1))
//console.log(Math.random())

//console.log(Math.floor(Math.random() * 10) + 1);

//console.log(Math.random()); // will get values between 0 to 1 only

//console.log(Math.random() * 10); // will shift value to 1 digit left 




const number = Math.random()
console.log(number);  // will get values between 0 to 1 only

console.log(number * 10)  // will shift value to 1 digit left

console.log(Math.round(number * 10))  // gives round figure of random number

console.log(Math.round(number * 10) + 1)   // ensures that answer is not 0. (min value will always be 1)


const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min))   // will return number between 10 to 21