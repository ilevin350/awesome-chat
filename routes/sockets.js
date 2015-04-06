// exports.initialize = function(app) {
//   var io = require('socket.io');
//   var server = require('http').createServer(app);
//   io = io.listen(server); 
//   server.listen(app.get('port'));
//   io.sockets.on("connection", function(socket){ 
//     socket.send(JSON.stringify(
//       {type:'serverMessage', 
//         message: 'Welcome to the most interesting chat room on earth!'})); 
//     socket.on('message', function(message){ 
//       message= JSON.parse(message); 
//       if(message.type == "userMessage"){ 
//         socket.broadcast.send(JSON.stringify(message)); 
//         message.type = "myMessage"; 
//         socket.send(JSON.stringify(message)); 
//       } 
//     }); 
//   }); 
// };

