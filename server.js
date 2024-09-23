const WebSocket = require('ws')

const server = new WebSocket.Server({port:5000})

server.on('connection', socket => {
    console.log('New connection established')

    socket.on('message', message => {
        console.log(`Received message: ${message}`)

        socket.send('Hello Client')
    })
})

console.log('WebSocket server running on ws://your-ec2-ip:5000')