const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Js is fun");
    }
    if (req.url === '/about') {
        res.end('Learn Js');
    }
    res.end(`<h1>ERROR 404 </h1> page not found`)
        // console.log(req.url)
})

server.listen(8081);