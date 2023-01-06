const http =require('http')
const port = process.env.PORT || 3001
// membuat function callbak untuk handle request (req) browser response(res)
const server = http.createServer(function(req, res){
    res.end('hy dani')
})

server.listen(port)
console.log(`server listening on port ${port}`)

