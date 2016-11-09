/*var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.1:1337/');
*/

//copied code from class

var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log("Server running on port 3000");