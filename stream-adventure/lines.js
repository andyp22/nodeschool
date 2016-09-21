const split = require('split');
const through = require('through2');

var lineCount = 1;

process.stdin
  .pipe(split())
  .pipe(through(function(line, _, next) {
    const newString = (lineCount % 2 === 0) ? line.toString().toUpperCase() : line.toString().toLowerCase();
    this.push(`${newString}\n`);
    lineCount++;
    next();
  }))
  .pipe(process.stdout);
