/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const path = require('path');
const express = require('express'); 
 const http = require('http');
const socketio = require('socket.io');

var publicPath = path.join(__dirname, '../html');
const port = process.env.PORT || 3000;
var app = express();
var server = app.listen(port, ()=> {
    console.log('Server started on ', port);
});
var io = socketio.listen(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');
    socket.broadcast.emit('newMessage', {
        from: 'Rahul',
        text: 'joined'
    });
    
    socket.on('createMessage', (message)=> {
        message.createdAt = new Date().getTime();
        io.emit('newMessage', message);
    });
    
    
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});







