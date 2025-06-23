 // falsy
 // false, 0, -0, "", null, undefined, NaN.

 // truthy
 // true, 1, -1, "0", "false", {}, [], function() {}.


const userEmail = " "

//  if ( userEmail ) {
//    console.log("User email is provided.");
//  } else {
//     console.log("User email is not provided.");
//  }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}


// Nullish coalcescing operator : Null or undefined

let val1;

// val1 = null ?? 20
// val1 = undefined ?? 10
val1 = null ?? undefined ?? 20

console.log(val1);


// ternary operator

const age = 20;
const canVote = age >= 18 ? "You can vote" : "You cannot vote";
console.log(canVote);

console.log(a);
var a = 5;
