function test(str) {
  return /^[a-z]([a-z0-9_]+)?$/.test(str) && /[a-z0-9]$/.test(str);
}

function convert(input) {
  return input.map((word) => word.toLowerCase()).join('_');
}

function parse(str) {
  return str.split('_').map((word) => word.toLowerCase());
}

module.exports = {
  test,
  convert,
  parse,
};
