const http = require("http");
const HOSTNAME ='localhost'
const PORT = 6000
function requestHandler (req, res){
console.log(req)
res.end("Hello from the Server")
}
const server = http.createServer(requestHandler)
server.listen(PORT,HOSTNAME, ()=> {
    console.log(`Server Started Successfully at http://${HOSTNAME}:${PORT}`)
})