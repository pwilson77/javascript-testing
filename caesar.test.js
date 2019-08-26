var caesarMethods = require("./caesar.js");

test("testing Caesar's Cipher", () => {
  expect(caesarMethods.caesar.cipher("string", 1)).toBe("tusjoh");
  expect(caesarMethods.caesar.cipher("abcdefghijklmnopqrstuvwxyz", 2)).toBe(
    "cdefghijklmnopqrstuvwxyzab"
  );
  expect(
    caesarMethods.caesar.cipher("string% with&& 56! punc & numb009s", 4)
  ).toBe("wxvmrk% amxl&& 56! tyrg & ryqf009w");
  expect(caesarMethods.caesar.cipher("ABC", -1)).toBe("ZAB");
});
