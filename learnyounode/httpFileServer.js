const fs = require('fs');
const bl = require('bl');
const http = require('http');

const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((req, res) => {
  fs.createReadStream(filePath).pipe(bl((err, data) => {
    if (!err) {
      res.write(data);
    }
  }));
});

server.listen(Number(port));

// Suggested solution
/*
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });

  fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(Number(process.argv[2]));
*/
