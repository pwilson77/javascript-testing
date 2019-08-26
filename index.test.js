var methods = require("./index.js");

test("capitalize the first letter of a string", () => {
  expect(methods.capitalize("string")).toBe("String");
});

test("reverse a string", () => {
  expect(methods.reverseString("correction")).toBe("noitcerroc");
});

test("calculator addition test", () => {
  expect(methods.calculator.add(11, 12)).toBe(23);
});

test("calculator subtraction test", () => {
  expect(methods.calculator.subtract(23, 12)).toBe(11);
});

test("calculator multiply test", () => {
  expect(methods.calculator.multiply(11, 12)).toBe(132);
});

test("calculator division test", () => {
  expect(methods.calculator.divide(121, 11)).toBe(11);
});
