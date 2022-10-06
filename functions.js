//function addTwo(a,b) { <this is equivalent to line to it would have the same output
// const addTwo = (a,b) => {
//     return a + b
// }

const addtwo = require ("./external.js")
console.log ("non of this minus stuff! We don't do negative!")
const sum = addtwo(3,4)
console.log(sum)

