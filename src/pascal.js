function test(str) {
  return /^[A-Z]([a-zA-Z0-9]+)?$/.test(str);
}

function convert(input) {
  return input
    .map((word) => word[0].toUpperCase() + word.toLowerCase().slice(1))
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
