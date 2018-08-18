/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var socket = io();
            
socket.on('connect', () => {
    console.log('Connected to server');
    });
socket.on('disconnect', () => {
    console.log('Disconnected from the server');
    });

socket.emit('createMessage', {
    from: 'Mr butt',
    text: 'Satan lives'
});

socket.on('newMessage', (message)=> {
   console.log('Message', message) ;
}
);