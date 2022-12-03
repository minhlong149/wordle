const checkUserGuess = require("./checkUserGuess");
const tests = require("../data/tests.json");

const wordleTests = tests.map((test) => {
  const word = test.slice(0, 5);
  const guess = test.slice(6, 11);
  const result = test.slice(12, 17);
  return [word, guess, visualizeResult(result)];
});

test.each(wordleTests)("Matching %s with %s is %s", (word, guess, result) => {
  const output = checkUserGuess(guess, word).join("");
  expect(output).toBe(result);
});

function visualizeResult(result) {
  result = result.replace(/c/g, "🟢");
  result = result.replace(/m/g, "🟡");
  result = result.replace(/w/g, "🔴");
  return result;
}
