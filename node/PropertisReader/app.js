var http = require('http');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('properties/server.file');

/*console.log(properties.get('server.listener.port'));
console.log(properties.get('server.default.msg'));
console.log(properties.get('app.grid.rows'));*/

var port = (process.env.PORT || process.env.VCAP_APP_PORT || properties.get('server.listener.port'));

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(properties.get('server.default.msg'));
}).listen(port);

console.log(properties.get('server.start.log') + port);