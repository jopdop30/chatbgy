var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var html_dir = './html/';

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/login', function(req, res) {
    res.sendfile(html_dir + '/login.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
