/* eslint-disable*/
function mostCoincidence(array) {
  var counts = {};
  var compare = -1;
  var keys = [];
  var mostFrequent;
  for (var i = 0, len = array.length; i < len; i++) {
    var word = array[i];

    if (counts[word] === undefined) {
      counts[word] = 1;
    } else {
      counts[word] = counts[word] + 1;
    }
    if (counts[word] > compare) {
      compare = counts[word];
      mostFrequent = array[i];
    }
  }
  return mostFrequent;
}

export default mostCoincidence;
