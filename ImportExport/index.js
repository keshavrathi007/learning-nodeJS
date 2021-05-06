
const oper = require("./oper")
console.log(oper)
// console.log(add(5, 5))
// console.log(sub(5, 5))

// //const oper = require("./oper")
// console.log(oper.add(5, 5))
// console.log(oper.sub(5, 5))


//object destructuring
const { add, sub } = require("./oper")
console.log(sub(5, 5))
console.log(add(5, 5))