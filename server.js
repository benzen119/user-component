
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    var readStream = fs.createReadStream(__dirname + '/data.list.json', 'utf8');
    readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Server is running....');

