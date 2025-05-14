const sym = Symbol("Key1")

const Obj = {
    name: "Jash",
    "full_name": "Jash Vadgama",
    [sym]: "newKey",
    age: 18,
    email: "jvm@gmail.com",
}
// console.log(Obj.age)

// Obj.age = 21
// console.log(Obj.age)
// console.log(Obj["name"]);
// console.log(Obj.full_name);

// console.log(typeof Obj.sym);
// Obj.name = "Bansal"
// Object.freeze(Obj)
// Obj.name = "Jash"


Obj.greet = function() {
    console.log("Hello User")
}
Obj.greetTwo = function() {
    console.log(`Hello ${this.name}`)
}
console.log(Obj.greet())
console.log(Obj.greetTwo())

console.log(Obj)