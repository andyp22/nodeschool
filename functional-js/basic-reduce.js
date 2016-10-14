function countWords(inputWords) {
  return inputWords.reduce(function (wordCount, currentWord) {
    wordCount[currentWord] = ++wordCount[currentWord] || 1;
    return wordCount;
  }, {});
}

module.exports = countWords;
