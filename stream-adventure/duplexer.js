const spawn = require('child_process').spawn;
const duplexer2 = require('duplexer2');

module.exports = function (cmd, args) {
  const childProcess = spawn(cmd, args);
  return duplexer2(childProcess.stdin, childProcess.stdout);
};
