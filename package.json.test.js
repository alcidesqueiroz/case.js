const test = require('tape');
const rewire = require('rewire');

const rewiredModule = rewire('./src');
const caseNames = rewiredModule.__get__('caseNames');
const packageJson = require('./package.json');

test('packed files', (t) => {
  t.ok(caseNames.every((name) => packageJson.files.includes(`src/${name}.js`)));
  t.end();
});
