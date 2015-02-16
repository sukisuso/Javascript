var http = require("http");
var url = require("url");
var router = require("./router");

function serverStart() {
    http.createServer(function(request, response) {
  
        var pathname = url.parse(request.url).pathname;
        console.log("Received petition for " + pathname);
        router.route(pathname);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("¿Que pasa tronco?");
        response.end();

    }).listen(4444);
    console.log("Server started...");
}

exports.start = serverStart;