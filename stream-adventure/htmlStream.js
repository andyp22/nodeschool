const trumpet = require('trumpet');
const map = require('through2-map');

const tr = trumpet();
const stream = tr.select('.loud').createStream();
stream.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);
