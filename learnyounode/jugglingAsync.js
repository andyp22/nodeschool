const hyperquest = require('hyperquest');
const bl = require('bl');

const results = [];
const count = 3;

const onEndRequest = () => {
  if (results.length === count) {
    results.sort((a, b) => {
      if (a.order > b.order) return 1;
      if (a.order < b.order) return -1;
      return 0;
    });
    results.forEach((result) => {
      console.log(result.text);
    });
  }
};

const hyperRequest = (url, index) => {
  hyperquest(url).pipe(bl((err, data) => {
    results.push({
      order: index,
      text: data.toString(),
    });
    onEndRequest();
  }));
};

for (var i = 0; i < count; i++) {
  hyperRequest(process.argv[2 + i], i);
}
