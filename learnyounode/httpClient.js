const http = require('http');

const requestURL = process.argv[2];

http.get(requestURL, (response) => {
  response.setEncoding('utf8').on('data', console.log).on('error', console.error);
}).on('error', console.error);
