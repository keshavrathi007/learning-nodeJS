const http = require("http")
const fs = require("fs")
var requests = require('requests');

const homeFile = fs.readFileSync("home.html", "utf-8")
const server = http.createServer((req, res) => {

    if (req.url == "/") {
        requests("http://api.openweathermap.org/data/2.5/weather?q=pune&appid=83e97f34072516a000d46b6b91f1a19e")
            .on('data', (chunk) => {
                const objData = JSON.parse(chunk)
                const arrData = [objData]
                console.log(arrData)
            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);

                console.log('end');
            });
    }
})
server.listen(8000, '127.0.0.1', () => {

    console.log("listening of port 8000")
})