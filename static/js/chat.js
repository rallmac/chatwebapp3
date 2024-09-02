//javascript chat function
var socket = io();


	    document.getElementById('send-button').onclick = function() {
	        var message = document.getElementById('message-input').value;
	        socket.send(message);
	        document.getElementById('message-input').value = '';
	    };


	    socket.on('message', function(msg) {
	        var chatBox = document.getElementById('chat-box');
	        var messageElem = document.createElement('p');
	        messageElem.innerText = msg;
	        chatBox.appendChild(messageElem);
	    });