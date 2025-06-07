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

