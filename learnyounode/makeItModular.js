const myModule = require('./filteredLsModular.js');

const fileDirectory = process.argv[2];
const fileExtension = process.argv[3];

myModule(fileDirectory, fileExtension, (err, data) => {
  if (err) return console.error(err);
  data.forEach((file) => {
    console.log(file);
  });
});
