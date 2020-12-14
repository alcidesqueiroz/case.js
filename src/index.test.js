const test = require('tape');
const rewire = require('rewire');
const sinon = require('sinon');

const rewiredModule = rewire('.');

const detect = rewiredModule.__get__('detect');
const convert = rewiredModule.__get__('convert');
const isCase = rewiredModule.__get__('isCase');
const cases = rewiredModule.__get__('cases');

test('function: detect', (t) => {
  t.equal(detect('thisIsACamelCaseString')[0], 'camel');
  t.equal(detect('THIS_IS_A_CONSTANT_CASE_STRING')[0], 'constant');
  t.equal(detect('this.is.a.dot.case.string')[0], 'dot');
  t.equal(detect('this-is-a-kebab-case-string')[0], 'kebab');
  t.equal(detect('ThisIsAPascalCaseString')[0], 'pascal');
  t.equal(detect('this_is_a_snake_case_string')[0], 'snake');
  t.equal(detect('this is a space case string')[0], 'space');
  t.equal(detect('whatever')[0], 'camel');
  t.equal(detect('WHATEVER')[0], 'pascal');
  t.equal(detect('WHAT_EVER')[0], 'constant');
  t.equal(detect(''), null);
  t.equal(detect('123'), null);
  t.equal(detect('jslks.sjsk-A'), null);
  t.equal(detect('AAA.aaa'), null);
  t.equal(detect('aaa_aAA'), null);
  t.equal(detect('AAA_AaA'), null);
  t.equal(detect('AA-aaa'), null);
  t.equal(detect('AAA  aaa'), null);
  t.equal(detect('aaaa aAa'), null);
  t.equal(detect('   '), null);
  t.equal(detect('aaaa#aa'), null);
  t.equal(detect('aaaa@aa'), null);
  t.equal(detect('aaaa%aa'), null);
  t.equal(detect('aaaa!aa'), null);
  t.end();
});

test('function: convert', (t) => {
  t.test('should call detect supplying the trimmed input string', (t) => {
    const detectStub = sinon.stub();
    detectStub.returns(['camel', { parse: () => [] }]);
    rewiredModule.__set__('detect', detectStub);
    convert(' whatever ', { convert: () => {} });
    t.ok(detectStub.calledWith('whatever'));
    rewiredModule.__set__('detect', detect);
    t.end();
  });

  t.test('should throw an error if the case is not recognizable', (t) => {
    const expectedError = { message: 'Cannot detect input case' };
    t.throws(() => convert('some.weird-input', {}), expectedError);
    t.end();
  });

  t.test(
    'should call the proper parse method for the detected case of the input string',
    (t) => {
      const parseSpy = sinon.spy();
      rewiredModule.__set__('detect', () => ['camel', { parse: parseSpy }]);
      convert('whatever', { convert: () => {} });
      t.ok(parseSpy.calledWith('whatever'));
      rewiredModule.__set__('detect', detect);
      t.end();
    }
  );

  t.test(
    'should call the convert method from the case object supplied as argument',
    (t) => {
      const convertSpy = sinon.spy();
      const parseReturn = [];
      rewiredModule.__set__('detect', () => [
        'camel',
        { parse: () => parseReturn },
      ]);
      convert('whatever', { convert: convertSpy });
      t.ok(convertSpy.calledWith(parseReturn));
      rewiredModule.__set__('detect', detect);
      t.end();
    }
  );

  t.end();
});

test('function: isCase', (t) => {
  t.test(
    'should call the test method from the case object supplied as argument',
    (t) => {
      const testSpy = sinon.spy();
      isCase(' whatever ', { test: testSpy });
      t.ok(testSpy.calledWith('whatever'));
      t.end();
    }
  );

  t.end();
});

/* eslint-disable no-restricted-syntax */
test('Exported object', (t) => {
  t.test('test methods', (t) => {
    t.test('method: is', (t) => {
      t.test('should throw an error if the case name is invalid', (t) => {
        const expectedError = { message: 'Invalid case' };
        t.throws(() => rewiredModule.is('some-input', 'foo'), expectedError);
        t.end();
      });

      t.test(
        'should call the "isCase" function supplying the string to be tested and the proper case object',
        (t) => {
          const isCaseSpy = sinon.spy();
          rewiredModule.__set__('isCase', isCaseSpy);
          const dotCaseObj = cases.get('dot');
          rewiredModule.is('some-input', 'dot');
          t.ok(isCaseSpy.calledWith('some-input', dotCaseObj));
          rewiredModule.__set__('isCase', isCase);
          t.end();
        }
      );

      t.end();
    });

    t.test('should have a test method for each case', (t) => {
      const isCaseSpy = sinon.spy();
      rewiredModule.__set__('isCase', isCaseSpy);

      for (const caseObj of cases) {
        rewiredModule.is[caseObj[0]]('whatever');
        t.ok(isCaseSpy.calledWith('whatever', caseObj[1]));
      }

      rewiredModule.__set__('isCase', isCase);
      t.end();
    });

    t.end();
  });

  t.test('convert methods', (t) => {
    t.test('should have a convert method for each case', (t) => {
      const convertSpy = sinon.spy();
      rewiredModule.__set__('convert', convertSpy);

      for (const caseObj of cases) {
        rewiredModule[caseObj[0]]('whatever');
        t.ok(convertSpy.calledWith('whatever', caseObj[1]));
      }

      rewiredModule.__set__('convert', convert);
      t.end();
    });

    t.test('should convert strings properly', (t) => {
      const samples = [
        {
          camel: 'thisIsAGoodExampleOfPhrase',
          constant: 'THIS_IS_A_GOOD_EXAMPLE_OF_PHRASE',
          dot: 'this.is.a.good.example.of.phrase',
          kebab: 'this-is-a-good-example-of-phrase',
          pascal: 'ThisIsAGoodExampleOfPhrase',
          snake: 'this_is_a_good_example_of_phrase',
          space: 'this is a good example of phrase',
        },
        {
          camel: 'aA',
          constant: 'A_A',
          dot: 'a.a',
          kebab: 'a-a',
          pascal: 'AA',
          snake: 'a_a',
          space: 'a a',
        },
        {
          camel: 'aBb1CcDEee',
          constant: 'A_BB1_CC_D_EEE',
          dot: 'a.bb1.cc.d.eee',
          kebab: 'a-bb1-cc-d-eee',
          pascal: 'ABb1CcDEee',
          snake: 'a_bb1_cc_d_eee',
          space: 'a bb1 cc d eee',
        },
        {
          camel: 'a1',
          constant: 'A1',
          dot: 'a1',
          kebab: 'a1',
          pascal: 'A1',
          snake: 'a1',
          space: 'a1',
        },
        {
          camel: 'aAAAA',
          constant: 'A_A_A_A_A',
          dot: 'a.a.a.a.a',
          kebab: 'a-a-a-a-a',
          pascal: 'AAAAA',
          snake: 'a_a_a_a_a',
          space: 'a a a a a',
        },
      ];

      for (const sample of samples) {
        const sampleStrings = Object.entries(sample);

        for (const [caseName, toStr] of sampleStrings) {
          const others = sampleStrings.filter(([name]) => caseName !== name);

          for (const { 1: fromStr } of others) {
            t.equal(rewiredModule[caseName](fromStr), toStr);
          }
        }
      }

      t.end();
    });

    t.end();
  });

  t.end();
});
/* eslint-enable no-restricted-syntax */
