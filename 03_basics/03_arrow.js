const user = {
    username: "jash",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to Site`);
        console.log(this);
        
    }
}

// user.welcomeMessage() // This will work

// user.username = "JVM" //  This will change the username property of the user object

// user.welcomeMessage()  //  This will now print "JVM , welcome to Site"

console.log(this);

const allow = {
    name: "jash",
    greet: function(){
        console.log(this);     // This will refer to the allow object
    }
}

// allow.greet()

// function chai(){
//     let name = "jash"
//     console.log(`${this.name}`);
// }
// chai()

const chai = () => {
    let name = "jash"
    console.log(this);  // This will refer to the global object (window in browser, global in Node.js)
}
// chai()


// const addThree = (num1, num2, num3) => {
//     return num1 + num2 + num3;
// }
// console.log(addThree(1, 2, 3));


// const addThree = (num1, num2, num3) => num1 + num2 + num3;

const addThree = (num1, num2, num3) => (num1 + num2 + num3);
console.log(addThree(1, 2, 3));

const obj = () => ({name: "jash"})         //always wrap the object in parentheses
// const obj = () => {name: "jash"}       //this will not work
// console.log(obj);
console.log(obj());