const http = require("http").createServer();

const io = require("socket.io")(http, {
    cors: { origin:"*" },
});

io.on("connection", (socket) => {
    console.log("A user joined!");

    socket.on("message", (message) => {
        io.emit("message", message);
    });
});
