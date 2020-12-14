const test = require('tape');
const Pascal = require('./pascal');

test('Camel case', (t) => {
  t.test('test', (t) => {
    t.ok(Pascal.test('ThisIsAPascalCaseString'));
    t.notOk(Pascal.test('thisIsACamelCaseString'));
    t.notOk(Pascal.test('THIS_IS_A_CONSTANT_CASE_STRING'));
    t.notOk(Pascal.test('this.is.a.dot.case.string'));
    t.notOk(Pascal.test('this-is-a-kebab-case-string'));
    t.notOk(Pascal.test('this_is_a_snake_case_string'));
    t.notOk(Pascal.test('this is a space case string'));
    t.end();
  });

  t.test('parse', (t) => {
    t.deepEqual(Pascal.parse('ThisIsAPhrase'), ['this', 'is', 'a', 'phrase']);
    t.end();
  });

  t.test('convert', (t) => {
    t.equal(Pascal.convert(['this', 'is', 'a', 'phrase']), 'ThisIsAPhrase');
    t.end();
  });
  t.end();
});
