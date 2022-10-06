//function addTwo(a,b) { <this is equivalent to line to it would have the same output
// const addTwo = (a,b) => {
//     return a + b
// }

const addtwo = require ("./external.js")
console.log ("non of this minus stuff! We don't do negative!")
const sum = addtwo(3,4)
console.log(sum)
const subtract = require("./minus.js")

// const sum = addtwo(3,4)
// console.log(sum)

const total = subtract(10,5)
console.log(total)

