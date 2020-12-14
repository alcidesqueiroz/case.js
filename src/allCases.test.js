const test = require('tape');
const rewire = require('rewire');

const rewiredModule = rewire('.');

const cases = rewiredModule.__get__('cases');

/* eslint-disable no-restricted-syntax */
test('strings converted to a given case should be valid', (t) => {
  const strings = [
    ['a'],
    ['aa'],
    ['aa', 'bb'],
    ['a', 'bcd', 'd', 'a123', '123'],
    ['a1'],
    ['a', '1', 'b', 'c'],
    ['abcde', 'abc12de', '1', '2', 'defhi'],
  ];

  for (const parsedString of strings) {
    for (const { 1: caseObj } of cases) {
      const converted = caseObj.convert(parsedString);
      t.ok(converted !== null);
      t.ok(caseObj.test(converted));
    }
  }

  t.end();
});
/* eslint-enable no-restricted-syntax */
