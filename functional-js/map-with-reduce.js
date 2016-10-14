module.exports = function arrayMap(arr, fn) {
  // SOLUTION GOES HERE
  const result = [];
  arr.reduce(function (prev, curr) {
    result.push(fn(curr));
  }, null);
  return result;
};
