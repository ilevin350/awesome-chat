// var socket = io.connect('/'); 

// socket.on('message', function (data) { 
//   data = JSON.parse(data); 
//   $('#messages').append('<div class="' + data.type + '">' + data.message + '</div>'); 
// }); 

// Use jQuery document ready function to place send button click handler
$(function(){ 
  $('#send').click(function(){ 
    alert("Hi!");
    // var data = { 
    //   message: $('#message').val(), 
    //   type:'userMessage' 
    // }; 
    // socket.send(JSON.stringify(data)); 
    // $('#message').val(''); 
  }); 
}); 