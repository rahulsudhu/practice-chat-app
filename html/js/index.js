/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var socket = io();
            
socket.on('connect', function () {
    console.log('Connected to server');
    });
socket.on('disconnect', function ()  {
    console.log('Disconnected from the server');
    });

socket.emit('createMessage', {
    from: 'Mr butt',
    text: 'Satan lives'
});

socket.on('newMessage', function (message) {
   console.log('Message', message) ;
}
);