const crypto = require('crypto');

const passphrase = process.argv[2];
const decipher = crypto.createDecipher('aes256', passphrase);

process.stdin.pipe(decipher).pipe(process.stdout);
