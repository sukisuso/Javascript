function a_donde_vas(response) {
    console.log("Handler for request 'a_donde_vas' dispatched.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Patatas traigo");
    response.end();
}
function disimula_disimula(response) {
    console.log("Handler for request 'disimula_disimula' dispatched.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Y la mula dijo si");
    response.end();
}
exports.a_donde_vas = a_donde_vas;
exports.disimula_disimula = disimula_disimula;