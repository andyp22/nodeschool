const fs = require('fs');
const path = require('path');

module.exports = function (dirName, ext, callback) {
  fs.readdir(dirName, (err, list) => {
    if (err) {
      callback(err);
    } else {
      const filtered = list.filter((value) => (path.extname(value) === `.${ext}`));
      callback(null, filtered);
    }
  });
};
