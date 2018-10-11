exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: (str) => /\d/.test(str),

  containsRepeatingLetter: (str) => /(.)\1{2,}/i.test(str),

  endsWithVowel: (str) => /[aeiou]$/i.test(str),

  captureThreeNumbers: (str) => /(\d){3}/i.test(str) ? str.match(/(\d){3}/i)[0] : false,

  matchesPattern: (str) => /^\d{3}\-\d{3}\-\d{4}$/i.test(str),

  isUSD: function(str) {

  }
};
