/* === FizzBuzz ===
 *
 * Fizzbuzz needs no description.
 * ESLint hates this, and so do I.
 *
 * Runtime:
 *  - Iteration: O(n)
*/

// eslint-disable-next-line import/prefer-default-export
export const fizzBuzzIteration = (N) => Array.from({ length: N }, (_, i) => (
  // eslint-disable-next-line no-nested-ternary, no-plusplus, no-param-reassign
  `${!(++i % 15) ? 'FizzBuzz' : !(i % 5) ? 'Buzz' : !(i % 3) ? 'Fizz' : i}`
));
