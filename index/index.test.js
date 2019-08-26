var methods = require("./index");

test("capitalize the first letter of a string", () => {
  expect(methods.capitalize("string")).toBe("String");

  expect(methods.capitalize("string")).not.toBe("string");
});

test("reverse a string", () => {
  expect(methods.reverseString("correction")).toBe("noitcerroc");

  expect(methods.reverseString("correction")).not.toBe("correction");
});

test("calculator addition test", () => {
  expect(methods.calculator.add(11, 12)).toBe(23);

  expect(methods.calculator.add(11, 12)).not.toBe(12);
});

test("calculator subtraction test", () => {
  expect(methods.calculator.subtract(23, 12)).toBe(11);

  expect(methods.calculator.subtract(23, 12)).not.toBe(1);
});

test("calculator multiply test", () => {
  expect(methods.calculator.multiply(11, 12)).toBe(132);

  expect(methods.calculator.multiply(11, 12)).not.toBe(13);
});

test("calculator division test", () => {
  expect(methods.calculator.divide(121, 11)).toBe(11);

  expect(methods.calculator.divide(121, 11)).not.toBe(13);
});
