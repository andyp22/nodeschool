const http = require('http');
const url = require('url');

const port = process.argv[2];

const onSuccess = (res, jsonObject) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(jsonObject));
};

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    return res.end('Send me a GET\n');
  }

  const apiPath = url.parse(req.url, true);
  const date = new Date(apiPath.query.iso);
  switch (apiPath.pathname) {
    case '/api/parsetime':
      onSuccess(res, {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      });
      break;
    case '/api/unixtime':
      onSuccess(res, {
        unixtime: date.getTime(),
      });
      break;
    default:
      res.writeHead(404);
      res.end();
      break;
  }
});

server.listen(port);
