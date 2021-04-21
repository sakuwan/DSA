/* === Generate valid parentheses ===
 *
 * Given N pairs of parentheses, write a function to generate all combinations
 * of valid parentheses. Valid in this case refers to a balanced number of
 * opening and closing parentheses, and that all openings have proper closing
 *
 * Runtimes:
 *  Recursion: O(2^2n)
*/

// eslint-disable-next-line import/prefer-default-export
export const parensRecursion = (N) => {
  if (N <= 0) return [];
  if (N === 1) return ['()'];

  const balancedLength = 2 * N;

  const validPairs = [];
  const generatePairs = (l, r, current) => {
    if (current.length === balancedLength) {
      validPairs.push(current);
    } else {
      if (l < N) generatePairs(l + 1, r, `${current}(`);
      if (r < l) generatePairs(l, r + 1, `${current})`);
    }
  };

  generatePairs(0, 0, '');

  return validPairs;
};
