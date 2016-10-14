function getDependencies(tree) {
  var list = [];
  if (tree && tree.dependencies) {
    var deps = new Map();
    Object.keys(tree.dependencies).forEach(function (key) {
      deps.set(key, tree.dependencies[key]);
    });
    deps.forEach(function (depObj, elm, obj) {
      list.push(elm + '@' + depObj.version);
      if (depObj.dependencies) {
        list = list.concat(getDependencies(depObj));
      }
    });
  }
  return list.filter(function (el, i, arr) {
    return arr.indexOf(el) === i;
  }).sort();
}

module.exports = getDependencies;
