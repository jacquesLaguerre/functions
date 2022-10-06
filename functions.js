//function addTwo(a,b) { <this is equivalent to line to it would have the same output
// const addTwo = (a,b) => {
//     return a + b
// }

const addtwo = require ("./external.js")

const sum = addtwo(3,4)
console.log(sum)

