const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    console.log(req.url)
    const data = fs.readFileSync(`${__dirname}/userData.json`, 'utf-8')
    const objData = JSON.parse(data)

    if (req.url == "/") {
        res.end("HELLO WORLD FROM root of NODE JS server")
    }
    else if (req.url == "/about") {
        res.end("hello from about side")
    }
    else if (req.url == "/userapi") {
        res.writeHead(200, { "content-type": "text/json" })
        res.end(objData[0].name)
    }
    else {
        res.writeHead(404, { "content-type": "text/html" })//tells the browser thats its an error page with 404 error
        res.end("404 error page")
    }

})

server.listen(8000, '127.0.0.1', () => {

    console.log("listening of port 8000")
})