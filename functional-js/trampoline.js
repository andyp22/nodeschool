function trampoline(fn) {
  // You probably want to implement a trampoline!
  var result = fn.apply(fn, Array.prototype.slice.call(arguments));

  var getType = {};
  while (result && getType.toString.call(result) === '[object Function]') {
    result = result();
  }

  return result;
}

function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return;
  return function() {
    operation();
    return repeat(operation, --num);
  };
}

module.exports = function (operation, num) {
  // You probably want to call your trampoline here!
  return trampoline(function() {
    return repeat(operation, num);
  });
};
