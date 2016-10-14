function duckCount() {
  const args = Array.prototype.slice.call(arguments);
  return args.reduce(function (prev, curr) {
    return ('quack' in curr && Object.hasOwnProperty.call(curr, 'quack')) ? ++prev : prev;
  }, 0);
}

module.exports = duckCount;
