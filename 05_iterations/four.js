const seeObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby"
}

for (const key in seeObj) {
    //console.log(`${key} stands for ${seeObj[key]}`);
}

const programming = ["js", "cpp", "rb"];

for (const key in programming) {
   // console.log(programming[key]);
    
}

const map = new Map()
map.set("name", "jash")
map.set("age", 21)
map.set("country", "India")

for (const key in map) {
    console.log(key);
}