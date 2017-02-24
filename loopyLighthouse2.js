var loopyLighthouse = function(range, multiples, words) {
  var startNumber = range[0];
  var endNumber = range[1];
  var firstNumberMultiple = multiples[0];
  var secondNumberMultiple = multiples[1];
  var wordOfFirstMultiple = words[0];
  var wordOfSecondMultiple = words[1];
for (i = startNumber; i <= endNumber; i++) {
  if (i % firstNumberMultiple === 0 && i % secondNumberMultiple === 0) {
    console.log(wordOfFirstMultiple + wordOfSecondMultiple);
  } else if (i % firstNumberMultiple === 0) {
    console.log(wordOfFirstMultiple);
  } else if (i % secondNumberMultiple === 0) {
    console.log(wordOfSecondMultiple);
  } else {
    console.log(i);
  }
}
}
loopyLighthouse([15, 95], [2, 5], ["Batty", "Beacon"]);