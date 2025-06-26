const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"
// for (const greet of greetings) {
//     if(greet === " "){
//         continue;
//     }
//     console.log(`Character: ${greet}`);   
// }

const map = new Map()
map.set("name", "jash")
map.set("age", 21)
map.set("country", "India")

console.log(map);

for (const [key, value] of map) {
     console.log(key, `:`, value);
     
}


const newObj = {
    name: "someone",
    age: 55,
    country: "india"
}

// for (const [key, value] of newObj) {
//     console.log(key, value);
    
// }   // This will throw an error because objects are not iterable 


for (const [key, value] of Object.entries(newObj)) {
    console.log(key, `:`, value);   
} // This will work because Object.entries() returns an array of key-value pairs
