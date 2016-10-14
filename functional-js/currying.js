function curryN(fn, n) {
  // If no n is supplied grab the number of arguments.
  if (typeof n !== 'number') n = fn.length;
  function genCurry(prev) {
    return function (arg) {
      // Gather the args.
      var args = prev.concat(arg);
      // If we haven't reached the nth arg then get some more.
      if (args.length < n) return genCurry(args);
      // Otherwise we are done and we can just return the function with args in place.
      return fn.apply(this, args);
    };
  }
  // Kick off the currying.
  return genCurry([]);
}

module.exports = curryN;
