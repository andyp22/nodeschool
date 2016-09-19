const http = require('http');
const map = require('through2-map');

const port = Number(process.argv[2]);

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    /* // Also works...
    req.on('data', (data) => {
      res.write(data.toString().toUpperCase());
    });
    */
    req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res);
  }
});

server.listen(port);
