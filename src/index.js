const caseNames = [
  'camel',
  'dot',
  'kebab',
  'pascal',
  'snake',
  'space',
  'constant',
];

const cases = new Map(caseNames.map((name) => [name, require(`./${name}`)]));

function detect(str) {
  const trimmedInput = str.trim();
  return (
    [...cases].find(({ 1: caseObj }) => caseObj.test(trimmedInput)) ?? null
  );
}

function convert(str, caseObj) {
  const trimmedInput = str.trim();
  const originCaseObj = detect(trimmedInput)?.[1];

  if (!originCaseObj) {
    throw new Error('Cannot detect input case');
  }

  const parsed = originCaseObj.parse(trimmedInput);
  return caseObj.convert(parsed);
}

function isCase(str, caseObj) {
  const trimmedInput = str.trim();
  return caseObj.test(trimmedInput);
}

const cs = {
  is: (str, caseName) => {
    const caseObj = cases.get(caseName);

    if (!caseObj) {
      throw new Error('Invalid case');
    }

    return isCase(str, caseObj);
  },
};

[...cases].forEach(([name, caseObj]) => {
  cs[name] = (str) => convert(str, caseObj);
  cs.is[name] = (str) => isCase(str, caseObj);
});

module.exports = cs;
