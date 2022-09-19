const webSocketServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');
const server = http.createServer();
server.listen(webSocketServerPort)

const wsServer = new webSocketServer({
    httpServer: server
});

console.log("server sparked")

wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);
    console.log("New connection made")
    connection.on('close', function(connection) {
        console.log("ended session")
    })
})