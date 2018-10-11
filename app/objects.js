exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: (fn, obj) => fn.call(obj),

  alterObjects: function(constructor, greeting) {

  },

  iterate: function(obj) {

  }
};
