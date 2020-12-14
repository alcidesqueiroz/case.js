const test = require('tape');
const Camel = require('./camel');

test('Camel case', (t) => {
  t.test('test', (t) => {
    t.ok(Camel.test('thisIsACamelCaseString'));
    t.notOk(Camel.test('THIS_IS_A_CONSTANT_CASE_STRING'));
    t.notOk(Camel.test('this.is.a.dot.case.string'));
    t.notOk(Camel.test('this-is-a-kebab-case-string'));
    t.notOk(Camel.test('ThisIsAPascalCaseString'));
    t.notOk(Camel.test('this_is_a_snake_case_string'));
    t.notOk(Camel.test('this is a space case string'));
    t.end();
  });

  t.test('parse', (t) => {
    t.deepEqual(Camel.parse('thisIsAPhrase'), ['this', 'is', 'a', 'phrase']);
    t.end();
  });

  t.test('convert', (t) => {
    t.equal(Camel.convert(['this', 'is', 'a', 'phrase']), 'thisIsAPhrase');
    t.end();
  });
  t.end();
});
