// filter 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number > 4);
console.log(evenNumbers); // [2, 4, 6, 8, 10]    // give new array according to the condition

// how it works ? 
// The filter method creates a new array with all elements that pass the test implemented by the provided function.
// In this case, the test is whether the number is greater than 4.
// The filter method does not modify the original array; it returns a new array containing the elements that satisfy the condition.
// In this example, the evenNumbers array will contain all numbers from the original numbers array that are greater than 4, which are [5, 6, 7, 8, 9, 10].


// map

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubledNumbers = numbers2.map((number) => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]  // give new array after transforming the original array



// how it works ?
// The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
// In this case, the function takes each number and multiplies it by 2.
// The map method does not modify the original array; it returns a new array containing the results of the function applied to each element.
// In this example, the doubledNumbers array will contain all numbers from the original numbers2 array, each multiplied by 2, resulting in [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].


// reduce

const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15  // give single value after reducing the array to a single value

// how it works ?
// The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// In this case, the reducer function takes an accumulator (which accumulates the result) and the current value, and it adds them together.
// The second argument to reduce (0 in this case) is the initial value of the accumulator.
// The reduce method processes each element of the array, applying the reducer function, and returns a single value.
// In this example, the sum variable will contain the total of all numbers in the original numbers3 array, which is 15.


const cart = [
    {
        product: 'smart watch',
        price: 1500
    },
    {
        product: 'Book',
        price: 500
    },
    {
        product: 'perfume',
        price: 800
    },
    {
        product: 'table cloth',
        price: 450
    }
]

const total = cart.reduce( (acc, item) => (acc + item.price), 0)

console.log(total);
