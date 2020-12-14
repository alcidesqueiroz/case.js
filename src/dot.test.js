const test = require('tape');
const Dot = require('./dot');

test('Dot case', (t) => {
  t.test('test', (t) => {
    t.ok(Dot.test('this.is.a.dot.case.string'));
    t.notOk(Dot.test('thisIsACamelCaseString'));
    t.notOk(Dot.test('THIS_IS_A_CONSTANT_CASE_STRING'));
    t.notOk(Dot.test('this-is-a-kebab-case-string'));
    t.notOk(Dot.test('ThisIsAPascalCaseString'));
    t.notOk(Dot.test('this_is_a_snake_case_string'));
    t.notOk(Dot.test('this is a space case string'));
    t.end();
  });

  t.test('parse', (t) => {
    t.deepEqual(Dot.parse('this.is.a.phrase'), ['this', 'is', 'a', 'phrase']);
    t.end();
  });

  t.test('convert', (t) => {
    t.equal(Dot.convert(['this', 'is', 'a', 'phrase']), 'this.is.a.phrase');
    t.end();
  });

  t.end();
});
