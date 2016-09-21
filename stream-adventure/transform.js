const through = require('through2');

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

const end = (done) => {
  done();
};

const stream = through(write, end);
process.stdin.pipe(stream).pipe(process.stdout);
