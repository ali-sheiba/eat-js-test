exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  // the test is failing !
  valueAtBit: (num, bit) => num & bit,

  base10: (str) => parseInt(str, 2),

  // the test is failing !
  convertToBinary: (num) => (num).toString(2),

  multiply: function(a, b) {
    return parseFloat((a * b).toFixed(b.toString().split('.')[1].length))
  }
};
