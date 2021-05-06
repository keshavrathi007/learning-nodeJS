const add = (x, y) => {
    return x + y;
}
const sub = (x, y) => {
    return x - y;
}

//to pass only 1 value as export
//module.exports=add

//to pass multiple values to export
// module.exports.add = add;
// module.exports.sub = sub;

module.exports = { add, sub }//object destructuring