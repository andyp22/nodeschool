const net = require('net');
const strftime = require('strftime');

const connectionPort = process.argv[2];
const datePattern = '%Y-%m-%d %H:%M';

const server = net.createServer((socket) => {
  socket.end(`${strftime(datePattern, new Date())}\n`);
});

server.listen(connectionPort);
