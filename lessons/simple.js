/**
 * We have two functions, `sum` and `subtract` ,
 * that are ready to be tested.
 *
 * Task: check if the results are the respects.
 *
 *            **BONUS**
 * Throw an error if the test fails.
 *
 *
 * Execute: Use `node lessons/simple.js` to run the test.
 */

const { sum, subtract } = require('../math');

let result, expected;
result = sum(2, 4);
expected = 6;
if (result !== expected) {
  throw new Error(`Sum ${result} is not ${expected}`);
}
result = substract(10, 2);
expected = 8;
if (result !== expected) {
  throw new Error(`Substract ${result} is not ${expected}`);
}

/**
 * Hint: there's no magic, just the most straightforward conditional statement.
 *
 * Answer: Checkout the main branch for the answer.
 */
