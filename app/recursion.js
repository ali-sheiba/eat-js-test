exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let files = []
    data.files.map( f => files.push(typeof(f) === 'string' ? f : this.listFiles(f, dirName)))
    return files.flat()
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    if (n <= 2) return 1;
    return this.fibonacci(n - 2) + this.fibonacci(n - 1)
  },

  validParentheses: function(n) {

  }
};
