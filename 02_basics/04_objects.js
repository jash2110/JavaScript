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
// console.log(one)
const two = {2: "C", 4: "D"}
// console.log(two)
const three = Object.assign({}, one, two)    // //{1: "A", 2: "C", 4: "D"} 

// console.table(three)                     // {1: "A", 2: "B", 3:"C", 4: "D"}
// console.table(one);                      // {1: "A", 2: "B"}
// console.log(three === one)               // false


const users = {
    id: 45,
    name: "abc"
}

// users.id = 45
// users.name = "abc"

// console.log(users)

const admin = {
    id1: 2,
    name1: "efg"
}

// admin.id = 02
// admin.name = "efg"

// console.log(admin)

const app = {...users, ...admin}
// console.log(app);

const company = {}

company.name = "JVM"
company.id = "23fgv"


// console.log(typeof company);

// console.log(company);



const obj1 = {
    name: "abcd",
    age: 30
}

const obj2 = {
    name1: "efgh",
    age1: 21,
    city: "rajkot",
    state: "gujarat"
}

const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj1);
// console.log(obj3);



const newUser = [
    {
        name: "Binod",
        age: null
    },
    {
        name: "Suman",
        age: 50
    },
    {
        name: "Kanta",
        age: 70
    }
]

// console.log(newUser[1].name);

// console.log(Object.keys(newUser));
// console.log(Object.values(newUser));
// console.log(Object.entries(newUser));

// console.log(typeof newUser);
// console.log(newUser[1].hasOwnProperty('name'));

const obj = {
    code: 147,
    name: "JS",
    fees: 200
}

const {name: nm} = obj;
console.log(nm);

const {code: cd} = obj;
console.log(cd); 

[
    {},
    {},
    {}
]
