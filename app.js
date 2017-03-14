

var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');

mongoose.connect(config.db);

var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
var app = express();


module.exports = require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Escuchando el puerto: ' + config.port);
});

//var server = app.listen(config.port);
//var server = require('http').Server(app);
//var server = http.createServer(app);

var http = require("http").createServer(app);
var io = require("socket.io")(http);
http.listen(3000, "127.0.0.1");
//var io  = require('socket.io').listen(server);
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
