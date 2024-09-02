var http = require('http');
http.createServer(function (req, res) {
  res.write('Hello World from NodeJS!');
  res.end();
}).listen(8000, function(){
 console.log("Server running at port 8000");
});