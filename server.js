const express = require('express');
const path = require('path')
const http = require('http')
const socketio = require('socket.io')
const app = express()
app.use(express.static(path.join(__dirname, "./public")));


require('dotenv').config()

const server = http.createServer(app)
// Socket IO instance is to expect to be called with raw http request 
const io = socketio(server)

app.get('/', (req, res) => {
    res.sendFile(`index.html`)
})
io.on('connection', (socket) => {
    // socket parameter contains the information of new connected user
    // Here we can use the method on socket to communicate with specific clients
    const greet = "Welcome !"
    socket.emit('message', greet)
})


server.listen(process.env.PORT, () => console.log(`Server is listening on ${process.env.PORT} port`))