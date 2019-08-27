const arrayAnalysis = (array) => {
  const avg = array.reduce((acc, value) => acc + value, 0) / array.length;
  const min = array.reduce((prev, value) => (value < prev ? value : prev));
  const max = array.reduce((prev, value) => (value > prev ? value : prev));
  const length = (() => array.length)();

  return {
    avg,
    min,
    max,
    length,
  };
};

module.exports = arrayAnalysis;
