const test = require('tape');
const Kebab = require('./kebab');

test('Kebab case', (t) => {
  t.test('test', (t) => {
    t.ok(Kebab.test('this-is-a-kebab-case-string'));
    t.notOk(Kebab.test('thisIsACamelCaseString'));
    t.notOk(Kebab.test('THIS_IS_A_CONSTANT_CASE_STRING'));
    t.notOk(Kebab.test('this.is.a.dot.case.string'));
    t.notOk(Kebab.test('ThisIsAPascalCaseString'));
    t.notOk(Kebab.test('this_is_a_snake_case_string'));
    t.notOk(Kebab.test('this is a space case string'));
    t.end();
  });

  t.test('parse', (t) => {
    t.deepEqual(Kebab.parse('this-is-a-phrase'), ['this', 'is', 'a', 'phrase']);
    t.end();
  });

  t.test('convert', (t) => {
    t.equal(Kebab.convert(['this', 'is', 'a', 'phrase']), 'this-is-a-phrase');
    t.end();
  });
  t.end();
});
