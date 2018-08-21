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

jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();
    socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
});
});

socket.on('newMessage', function (message) {
   var li = jQuery('<li></li>');
   li.text(`${message.from} : ${message.text}`);
   jQuery('#messages').append(li);
}
);