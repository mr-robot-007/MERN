const http = require("http");
const socketio = require("socket.io");
const httpServer = http.createServer();


// const io = socketio(httpServer, {
//     cors: {
//         origin: "http://localhost:8080",
//     },
// });


const io = socketio(httpServer);


let handler = function (socket) {
    console.log("connected to client");

    setInterval(function(){
        socket.emit("message", { prop1 : "You are so awesome"})
    },3000);
};
io.on("connection", handler);

setInterval(function(){
    io.sockets.emit("message",{ellan : "Hum he yha ke shanshah"})
},10000);

httpServer.listen(3000);