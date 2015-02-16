var http = require("http");

http.createServer(function(request,response){
	console.log("Peticion");
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Primera Web with NODEJS</h1>");
	response.end();
}).listen(4444);
console.log("Servidor creado");

/*
function serverStart() {
    http.createServer(function(request, response) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("¿Que pasa tronco?");
        response.end();
    }).listen(4444);
    console.log("Server started...");
}
exports.start = serverStart;
*/