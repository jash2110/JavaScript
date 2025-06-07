function addNums(num1, num2) {

    return num1 + num2;
}

const res = addNums(5, 10)
// console.log("Result:", res);

function logIn(name){

    if(name === undefined){
        console.log("Please enter a valid name");
    }else{
        return `${name} , welcome to the site!`;
    }
    
}
console.log(logIn("jash"));



function cartItems(...number){
    return number
}

// console.log(cartItems(500, 200, 100))

const details = {
    name: "jash",
    price: 199
}

function userDetails(obj){
    console.log(`Name: ${obj.name}, Price: ${obj.price}`);
}

// userDetails(details);

userDetails({
    name: "jash",
    price: 199
})

const array = [1, 2, 3, 4, 5];

function getElement(myArray) {
    return myArray[2];
}

// console.log(getElement(array));


console.log(getElement([1, 2, 3, 4, 5]));
