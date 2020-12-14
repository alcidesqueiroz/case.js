function test(str) {
  return /^[a-z]([a-zA-Z0-9]+)?$/.test(str);
}

function convert(input) {
  return input
    .map((word, index) => {
      word = word.toLowerCase();
      return index === 0 ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join('');
}

function parse(str) {
  return str
    .match(/([A-Z]?[^A-Z]*)/g)
    .slice(0, -1)
    .map((word) => word.toLowerCase());
}

module.exports = {
  test,
  convert,
  parse,
};
