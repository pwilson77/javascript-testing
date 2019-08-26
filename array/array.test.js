const arrayanalysis = require('./array');

test("should analyze the array properly", () => {
  expect(arrayanalysis([5,5,8,32,55,21,3,4,3,4]))
  .toEqual({avg: 14, min: 3, max: 55, length: 10});

  expect(arrayanalysis([5,5,8,32,55,21,3,4,3,4]))
  .not.toEqual({avg: 10, min: 1, max: 5, length: 10});
});