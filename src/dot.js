function test(str) {
  return /^[a-z]([a-z0-9.]+)?$/.test(str) && /[a-z0-9]$/.test(str);
}

function convert(input) {
  return input.map((word) => word.toLowerCase()).join('.');
}

function parse(str) {
  return str.split('.').map((word) => word.toLowerCase());
}

module.exports = {
  test,
  convert,
  parse,
};
