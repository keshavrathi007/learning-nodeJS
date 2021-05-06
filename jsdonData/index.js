const object = {
    name: "Keshav",
    college: "DSATM",
    year: 4
}
// console.log(object)
// const jsonData = JSON.stringify(object);//convert js object to json data
// console.log(jsonData)

// const objData = JSON.parse(jsonData);//convert json data to js object
// console.log(objData)

//todo: challlege
//convert obj to json
//save the data in file
//read the data from file
//convert bak to js object
//console.log()
const jsonData = JSON.stringify(object);
const fs = require("fs")
fs.writeFile('data.txt', jsonData, (err) => {
    console.log("file written into data.txt file")
})
fs.readFile("data.txt", "utf8", (err, data) => {
    console.log(data)
})