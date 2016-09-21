const concat = require('concat-stream');

process.stdin
  .pipe(concat((body) => {
    process.stdout.write(`${body.toString().split('').reverse().join('')}\n`);
  }));
