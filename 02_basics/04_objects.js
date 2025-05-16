// const object = new Object()

const object = {
    name: "jash",
    email: {
        isGoogle: true,
        isDotCom: false
    }
}

// console.log(object.email.isDotCom);

const one = {1: "A", 2: "B"}
console.log(one)
const two = {3: "C", 4: "D"}
console.log(two)
const three = Object.assign({}, one, two)    // //{1: "A", 2: "C", 4: "D"} 

console.table(three)                     // {1: "A", 2: "B", 3:"C", 4: "D"}
console.table(one);                      // {1: "A", 2: "B"}
console.log(three === one)               // false


const users = {
    id: 45,
    name: "abc"
}

// users.id = 45
// users.name = "abc"

// console.log(users)

const admin = {
    id1: 02,
    name1: "efg"
}

// admin.id = 02
// admin.name = "efg"

// console.log(admin)

const app = {...users, ...admin}
console.log(app);
