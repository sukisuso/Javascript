var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/webapp'));
app.disable('x-powered-by');
app.get('/', function(req, res){
	
  res.sendFile(__dirname + '/index.html');
});


http.listen(3000, function(){
  console.log('Server running');
});