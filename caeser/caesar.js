"use strict";

var exports = (module.exports = {});

exports.caesar = (function() {
  const shiftChar = (c, shift) => {
    let charCode = c.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      charCode = mod(charCode - 97 + shift, 26) + 97;
      // for small letters
    } else if (charCode >= 65 && charCode <= 90) {
      charCode = mod(charCode - 65 + shift, 26) + 65;
      // for capital letters
    }
    return String.fromCharCode(charCode);
  };

  const mod = (n, m) => {
    return ((n % m) + m) % m;
  };

  const cipher = (str, shift) => {
    str = str.split("").map(char => shiftChar(char, shift));
    return str.join("");
  };

  return {
    cipher
  };
})();
