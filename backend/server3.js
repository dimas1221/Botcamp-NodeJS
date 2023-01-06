const fs = require('fs')

const http =require('http')
const port = process.env.PORT || 3001
// membuat function callbak untuk handle request (req) browser response(res)
const server = http.createServer(function(req, res){
    if(req.url === '/') return responseText(req,res)
    if(req.url === '/json') return responseJson(req,res)
    if(req.url.match(/^\/static/)) return responseStatic(req,res)
    responseNotFound(req,res)
})
function responseText(req, res){
    res.setHeader('Content-Type', 'text/plain')
    res.end('hi bootcamp')
}

function responseJson(req, res){
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        batch : 'batch syariah',
        bootcamp:['JS', 'ReactJS']
    }))
}

function responseNotFound(req, res) {
    res.writeHead(404,{'Content-Type':'text/plain'})
    res.end('not found')
}

function responseStatic(req, res){
    const fileName = `${__dirname}/public${req.url.split('/static')[1]}`
    fs.createReadStream(fileName)
    .on('error', ()=> responseNotFound)
    .pipe(res)
}

server.listen(port)
console.log(`server listening on port ${port}`)

