function foo() {
  var bar = false;
  quux = 5;

  function zip() {
    let quux = 3;
    bar = true;
  }

  return zip;
}
