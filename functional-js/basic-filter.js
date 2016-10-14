function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.map(function grabMessages(msg) {
    return msg.message;
  }).filter(function filterLongMessages(msg) {
    return (msg.length < 50);
  });
}

module.exports = getShortMessages;
