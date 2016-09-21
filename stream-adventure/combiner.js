const combine = require('stream-combiner');
const split = require('split');
const through = require('through');
const zlib = require('zlib');

module.exports = function () {
  var genre;

  const write = function (entry) {
    if (entry.length === 0) return;
    const lineJSON = JSON.parse(entry.toString());
    switch (lineJSON.type) {
      case 'genre':
        if (genre) {
          this.queue(`${JSON.stringify(genre)}\n`);
        }
        genre = {
          name: lineJSON.name,
          books: [],
        };
        break;
      case 'book':
        genre.books.push(lineJSON.name);
        break;
      default:
        console.warn(`Unknown type: ${lineJSON.type}`);
        break;
    }
  };

  const end = function () {
    if (genre) {
      this.queue(`${JSON.stringify(genre)}\n`);
    }
    this.queue(null);
  };

  return combine(
    // read newline-separated json,
    split(),
    // group books into genres,
    through(write, end),
    // then gzip the output
    zlib.createGzip()
  );
};
