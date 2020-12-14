const test = require('tape');
const Space = require('./space');

test('Space case', (t) => {
  t.test('test', (t) => {
    t.ok(Space.test('this is a space case string'));
    t.notOk(Space.test('thisIsACamelCaseString'));
    t.notOk(Space.test('THIS_IS_A_CONSTANT_CASE_STRING'));
    t.notOk(Space.test('this.is.a.dot.case.string'));
    t.notOk(Space.test('this-is-a-kebab-case-string'));
    t.notOk(Space.test('ThisIsAPascalCaseString'));
    t.notOk(Space.test('this_is_a_snake_case_string'));
    t.end();
  });

  t.test('parse', (t) => {
    t.deepEqual(Space.parse('this is a phrase'), ['this', 'is', 'a', 'phrase']);
    t.end();
  });

  t.test('convert', (t) => {
    t.equal(Space.convert(['this', 'is', 'a', 'phrase']), 'this is a phrase');
    t.end();
  });
  t.end();
});
