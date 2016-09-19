const fs = require('fs');
const path = require('path');

const fileDirectory = process.argv[2];
const fileExtension = process.argv[3];

fs.readdir(fileDirectory, (err, list) => {
  if (!err) {
    const filtered = list.filter((value) => (path.extname(value) === `.${fileExtension}`));
    filtered.forEach((file) => {
      console.log(file);
    });
  }
});
