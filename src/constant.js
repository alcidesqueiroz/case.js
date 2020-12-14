function test(str) {
  return /^[A-Z]([A-Z0-9_]+)?$/.test(str) && /[A-Z0-9]$/.test(str);
}

function convert(input) {
  return input.map((word) => word.toUpperCase()).join('_');
}

function parse(str) {
  return str.split('_').map((word) => word.toLowerCase());
}

module.exports = {
  test,
  convert,
  parse,
};
