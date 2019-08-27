const caesarMethods = require('./caesar');

test('testing Caesar"s Cipher', () => {
  expect(caesarMethods.cipher('string', 0)).toBe('string');

  expect(caesarMethods.cipher('string', 0)).not.toBe('STRING');

  expect(caesarMethods.cipher('abcdefghijklmnopqrstuvwxyz', 2))
    .toBe('cdefghijklmnopqrstuvwxyzab');

  expect(caesarMethods.cipher('string% with&& 56! punc & numb009s', 4))
    .toBe('wxvmrk% amxl&& 56! tyrg & ryqf009w');

  expect(caesarMethods.cipher('ABC', -1)).toBe('ZAB');
});
