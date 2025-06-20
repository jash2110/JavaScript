
const temperature = 41

// if(temperature < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("Error");
// }
// console.log("temperature is greater than 50");



const score = 1000

// if(score > 500) console.log("Great job!");


const isLoggedIn = true
const debitCard = true

if(isLoggedIn && debitCard){
    console.log("You can continue to checkout");   
} else {
    console.log("please login or add a debit card");
}

const loginFromEmail = false
const loginFromGoogle = true

if(loginFromEmail || loginFromGoogle){
    console.log("Login successful");   
} else {
    console.log("Login failed");
}