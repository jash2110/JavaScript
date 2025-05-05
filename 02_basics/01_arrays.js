const arr = new Array(0,1,2,3,4,5)
//console.log(arr);

const myArr = [0,1,2,3,4]
//console.log(myArr);

//fruits.push();
//console.log(fruits.length); // 3
//console.log(fruits);

const fruits = ["banana", "apple", "peach"];
const newArr = [55, 78, 2, 100]

// fruits.length = 10
// fruits[4] = "chiku"
// //console.log(fruits.unshift("mango"));
// fruits.push("mango")
// console.table(fruits);
// console.log(fruits.length)
// console.table(newArr)
// newArr.push(45)
// newArr.push(45)
// newArr.push(59)
// newArr.push(99)
// newArr.unshift(23)
// newArr.pop()

// console.log(newArr.includes(2))
// console.log(newArr.indexOf(100))
// newArr.shift()
// console.log(newArr);

const newArr2 = newArr.join()
// console.log(newArr2);
// console.log(typeof newArr2);

const array = [10,20,30,40,50,60]

console.log(".......Slice.....");
const array1 = array
console.log(array1.slice(1,3));
console.log("Array after slice operation: ", array1)

console.log(".......Splice.....");
const array2 = array
console.log(array2.splice(1,3));
console.log("Array after splice operation: ", array2)
