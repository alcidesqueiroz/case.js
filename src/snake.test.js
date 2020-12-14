const test = require('tape');
const Snake = require('./snake');

test('Snake case', (t) => {
  t.test('test', (t) => {
    t.ok(Snake.test('this_is_a_snake_case_string'));
    t.notOk(Snake.test('thisIsACamelCaseString'));
    t.notOk(Snake.test('THIS_IS_A_CONSTANT_CASE_STRING'));
    t.notOk(Snake.test('this.is.a.dot.case.string'));
    t.notOk(Snake.test('this-is-a-kebab-case-string'));
    t.notOk(Snake.test('ThisIsAPascalCaseString'));
    t.notOk(Snake.test('this is a space case string'));
    t.end();
  });

  t.test('parse', (t) => {
    t.deepEqual(Snake.parse('this_is_a_phrase'), ['this', 'is', 'a', 'phrase']);
    t.end();
  });

  t.test('convert', (t) => {
    t.equal(Snake.convert(['this', 'is', 'a', 'phrase']), 'this_is_a_phrase');
    t.end();
  });
  t.end();
});
