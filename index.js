const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = module.exports.io = require('socket.io')(server)

const PORT = process.env.PORT || 3231

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
  });
  
server.listen(PORT, ()=>{
    console.log("Connected to port:" + PORT)
})