var express = require('express'),
    http = require('http');

//setting root
var app = express();
app.use(express.static(__dirname + "/"));

//setting the PORT, will be determined by Heroku or set to 5000 on local machine
var port = process.env.PORT || 5000;

var server = http.createServer(app);
server.listen(port);

console.log("http server listening on %d", port);

var io = require('socket.io')(server);

console.log("Socket.io Server was created");

});