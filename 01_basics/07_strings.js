const name = "jash"
const count = 23

// console.log("jash" + '23');

//console.log(`Hello there, my name is ${name} and my repo count is ${count}`);

const gameName = new String("Gta-V")
console.log(gameName.length)
console.log(gameName.indexOf('-'));
console.log(gameName.charAt(4))
console.log(gameName.search('V'));

console.log(`Name of the Game is ${gameName}`);
console.log(`Length of game name is ${gameName.length}`);
console.log(`Index of character 'a' in game name is ${gameName.indexOf('a')}`);
console.log(`Character at 4th index is ${gameName.charAt(4)}`);

//const newName = gameName.slice(0, 3)
//console.log(newName);

console.log(gameName.slice(0, 3));
console.log(gameName.slice(-4, 3));

console.log(`original name of the game is ${gameName.substring(0,3)}`);

let nameHere = "         gta5        "
console.log(nameHere);
console.log(nameHere.trim());
console.log(nameHere.trimStart());
console.log(nameHere.trimEnd());

const colony = [1, 2, 3, 4, 5]
//console.log(colony.substring(2));  // error - 'substring is not a function' in this case.

const key = "value"
//console.log(key.replace('v', 'p'))
//const pair = Array(key)
console.log(key);
