const cars = ["bmw", "mercedes", "porsche", "pagani"]
const bikes = ["suzuki", "ducati", "honda", "tvs"]

// cars.push(bikes)
// console.log(cars);

// const nothing = [...cars, ...bikes]
// console.log(nothing);

const nothing = cars.concat(bikes)
// console.log(nothing);

const ideas = [1,2,3,[4,5,6[7,8,9]]]
const newIdeas = ideas.flat(Infinity)
console.log(newIdeas);
