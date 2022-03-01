const { division } = require("./division");

test.each([
  [6, 3, 2],
  [12, 6, 2],
  [10, 5, 2],
])("a / b = c", (a, b, expected) => {
  expect(division(a, b)).toBe(expected);
});
