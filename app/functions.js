exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: (fn, arr) => fn(...arr),

  speak: (fn, obj) => fn.call(obj),

  functionFunction: (str) => (str2) => `${str}, ${str2}`,

  makeClosures: function(arr, fn) {

  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum
  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
