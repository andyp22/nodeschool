const crypto = require('crypto');
const through = require('through');
const tar = require('tar');
const zlib = require('zlib');

const cipherName = process.argv[2];
const cipherPassPhrase = process.argv[3];
const decipher = crypto.createDecipher(cipherName, cipherPassPhrase);
var hash = crypto.createHash('md5', { encoding: 'hex' });

var fileName;
const hashData = [];

const parser = tar.Parse();
parser.on('entry', (entry) => {
  if (entry.type === 'Directory') return;
  if (entry.type === 'File') {
    if (fileName) {
      hashData.push(`${hash.digest('hex')} ${fileName}\n`);
      hash = crypto.createHash('md5', { encoding: 'hex' });
    }
    fileName = entry.path;
    return;
  }
});

const write = function (entry) {
  hash.update(entry.toString());
};

const end = function () {
  hashData.push(`${hash.digest('hex')} ${fileName}\n`);
  for (var i = 0; i < hashData.length; i++) {
    this.push(hashData[i]);
  }
};

process.stdin
  .pipe(decipher)
  .pipe(zlib.createGunzip())
  .pipe(parser)
  .pipe(through(write, end))
  .pipe(process.stdout);

/*
// Here's the reference solution:

var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
var concat = require('concat-stream');

var parser = tar.Parse();
parser.on('entry', function (e) {
  if (e.type !== 'File') return;
  var h = crypto.createHash('md5', { encoding: 'hex' });
  e.pipe(h).pipe(concat(function (hash) {
    console.log(hash + ' ' + e.path);
  }));
});

var cipher = process.argv[2];
var pw = process.argv[3];
process.stdin
  .pipe(crypto.createDecipher(cipher, pw))
  .pipe(zlib.createGunzip())
  .pipe(parser);
*/
