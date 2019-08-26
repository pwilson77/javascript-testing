var caesarMethods = require("./caesar");

test("testing Caesar's Cipher", () => {
  expect(caesarMethods.caesar.cipher("string", 0)).toBe("string");

  expect(caesarMethods.caesar.cipher("string", 0)).not.toBe("STRING");

  expect(caesarMethods.caesar.cipher("abcdefghijklmnopqrstuvwxyz", 2)).toBe(
    "cdefghijklmnopqrstuvwxyzab"
  );
  
  expect(
    caesarMethods.caesar.cipher("string% with&& 56! punc & numb009s", 4)
  ).toBe("wxvmrk% amxl&& 56! tyrg & ryqf009w");
  expect(caesarMethods.caesar.cipher("ABC", -1)).toBe("ZAB");
});
