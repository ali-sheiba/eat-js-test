exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: (value) => new Promise((resolve, reject) => resolve(value)),

  manipulateRemoteData: (url) => fetch(url)
    .then(res => res.json())
    .then(data => data.people.map(e => e.name).sort())
};
