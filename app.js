var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var sockets = require('./routes/sockets.js')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// setup the port to use
app.set('port', 3001)

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

// --------------------------------
// Setup for socket.io server-side
// --------------------------------
//sockets.initialize(app);

var server = http.createServer(app);
var io = require('socket.io').listen(server); 
server.listen(app.get('port'));
// io.sockets.on("connection", function(socket){ 
//   socket.send(JSON.stringify(
//     {type:'serverMessage', 
//       message: 'Welcome to the most interesting chat room on earth!'})); 
//   socket.on('message', function(message){ 
//     message= JSON.parse(message); 
//     if(message.type == "userMessage"){ 
//       socket.broadcast.send(JSON.stringify(message)); 
//       message.type = "myMessage"; 
//       socket.send(JSON.stringify(message)); 
//     } 
//   }); 
// }); 
