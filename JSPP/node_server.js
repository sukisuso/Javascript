var fs = require("fs");
var http = require("http");
var url = require("url");

http.createServer(function (request, response) {

    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    response.writeHead(200);

    if(pathname == "/") {
        html = fs.readFileSync("index.html", "utf8");
        response.write(html);
    } else if (pathname == "/JSPP.js") {
        script = fs.readFileSync("JSPP.js", "utf8");
        response.write(script);
    }


    response.end();
}).listen(4444);

console.log("Listening to server on 4444...");