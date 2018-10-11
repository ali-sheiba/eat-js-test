exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: (arr, item) => arr.findIndex(i => i === item),

  sum: (arr) => arr.reduce((a, b) => (a + b)),

  remove: (arr, item) => arr.filter( i => i !== item ),

  removeWithoutCopy: function(arr, item) {

  },

  append: (arr, item) => [...arr, item],

  truncate: (arr) => arr.pop() && arr,

  prepend: (arr, item) => [item, ...arr],

  curtail: (arr) => arr.shift() && arr,

  concat: (arr1, arr2) => [...arr1, ...arr2],

  insert: (arr, item, index) => arr.splice(index, 0, item) && arr,

  count: (arr, item) => arr.filter(i => i === item).length,

  duplicates: function(arr) {
    let items = []
    arr.map(i => arr.filter(y => y === i).length > 1 && !items.includes(i) && items.push(i))
    return items;
  },

  square: (arr) => arr.map(i => i * i),

  findAllOccurrences: function(arr, target) {
    let indexes = []
    arr.map((val, i) => val === target && indexes.push(i))
    return indexes
  }
};
