const test = require('tape');
const Constant = require('./constant');

test('Constant case', (t) => {
  t.test('test', (t) => {
    t.ok(Constant.test('THIS_IS_A_CONSTANT_CASE_STRING'));
    t.notOk(Constant.test('thisIsACamelCaseString'));
    t.notOk(Constant.test('this.is.a.dot.case.string'));
    t.notOk(Constant.test('this-is-a-kebab-case-string'));
    t.notOk(Constant.test('ThisIsAPascalCaseString'));
    t.notOk(Constant.test('this_is_a_snake_case_string'));
    t.notOk(Constant.test('this is a space case string'));
    t.end();
  });

  t.test('parse', (t) => {
    t.deepEqual(Constant.parse('THIS_IS_A_PHRASE'), [
      'this',
      'is',
      'a',
      'phrase',
    ]);
    t.end();
  });

  t.test('convert', (t) => {
    t.equal(
      Constant.convert(['this', 'is', 'a', 'phrase']),
      'THIS_IS_A_PHRASE'
    );
    t.end();
  });
  t.end();
});
