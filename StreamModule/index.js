const fs = require("fs")
const http = require("http")
const server = http.createServer()

server.on('request', (req, res) => {
    // var fs = require("fs")
    // fs.readFile('data.txt', (err, data) => {
    //     if (err) return console.error(err);
    //     res.end(data.toString())
    // })


    //read from a stream
    //create a readble stream, ie, real time reading of data  on the server
    //create a readble stream
    //hande stream event, data, end ,error

    // const readbleStream = fs.createReadStream('data.txt')
    // readbleStream.on('data', (chunkData) => {
    //     res.write(chunkData)
    // })//read the chunkdata from the file and keep displaying it on the client


    // readbleStream.on('end', () => {
    //     res.end()
    // })//read the data till the end of the file


    // readbleStream.on('error', (err) => {
    //     console.log(err)
    //     res.end("file not found")
    // })//if error occured show this

    //3rd way
    const readbleStream = fs.createReadStream('data.txt')
    readbleStream.pipe(res)//read the data from the data.txt file 
    //and write the data as a response using pipe
})

server.listen(8000, "127.0.0.1");