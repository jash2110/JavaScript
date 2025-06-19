let a = 1000
const b = 200
var c = 30

if(true){
    let a = 10
    const b = 20
    var c = 3
    // console.log("Inner A: ",a);
    // console.log("Inner B: ",b);
}

// console.log("Outer A:",a);
// console.log("Outer B:",b);
// console.log(c);



function one(){
    const username = "JVM"

    function two(){
        const name = " jash"
        console.log(username + name);
    }
    // console.log(name);
    two()
    console.log(username);
}

one()