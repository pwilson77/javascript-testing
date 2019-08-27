const capitalize = (string) => {
  const capitalizedWord = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalizedWord;
};

const reverseString = (string) => {
  const reversedText = string
    .toLowerCase()
    .split('')
    .reverse()
    .join('');
  return reversedText;
};

const calculator = (() => {
  const add = (x, y) => x + y;

  const subtract = (x, y) => x - y;

  const multiply = (x, y) => x * y;

  const divide = (x, y) => x / y;

  return {
    add,
    subtract,
    multiply,
    divide,
  };
})();

module.exports = {
  capitalize,
  reverseString,
  calculator,
};
