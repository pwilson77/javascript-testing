"use strict";

const capitalize = string => {
  const capitalizedWord = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalizedWord;
};

const reverseString = string => {
  const reversedText = string
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  return reversedText;
};

const calculator = (function() {
  const add = (x, y) => {
    return x + y;
  };
  const subtract = (x, y) => {
    return x - y;
  };
  const multiply = (x, y) => {
    return x * y;
  };
  const divide = (x, y) => {
    return x / y;
  };
})();
