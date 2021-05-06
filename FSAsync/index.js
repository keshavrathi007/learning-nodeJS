const fs = require('fs')

// fs.writeFile('data.txt', 'THis is a text', (err) => {
//     console.log("code executed")
// })

//we pass function as an argument (callback) that gets called when task gets completed
//the callback has an argument that tells you whether the code ran successfully
//now ew say when the code executed successfully what to do 

fs.readFile("data.txt", "utf8", (err, data) => {
    console.log(data)
})