const fs = require("fs")

//creating new file syncronously
//fs.writeFileSync("read.txt", "hello world")

//appending file syncronously
//fs.appendFileSync("read.txt", "this is getting appended")


//node js include an additional datatype called buffer
//this buffer data is used to store the binary data
//not available in browser's javascript
//while reding from a file or reciving data over the network
const bufferData = fs.readFileSync("read.txt")
console.log(bufferData)

//convery buffer data to String
org_data = bufferData.toString()
console.log(org_data)

//to rename file
fs.renameSync("read.txt", "readwrite.txt")