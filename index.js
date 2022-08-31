const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.write('<h1>Socket IO Start on Port : <h1>');
    res.end();
})

server.listen(3000, () => {
    console.log('listening on *:3000')
});