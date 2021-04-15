var http = require("http");

http.createServer(function (request, response) {
   // Senden HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   // Senden der Antwort
   response.end('<h1>Die Antwort ist 42.</h1>');
}).listen(4242);

// Console will print the message
console.log('Webserver läuft unter http://localhost:4242/');