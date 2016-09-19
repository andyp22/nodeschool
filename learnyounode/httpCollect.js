const hyperquest = require('hyperquest');
const bl = require('bl');

const requestURL = process.argv[2];

hyperquest(requestURL).pipe(bl((err, data) => {
  console.log(data.length);
  console.log(data.toString());
}));
