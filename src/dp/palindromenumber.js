/* === Palindrome number ===
 *
 * Determine whether an integer N is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 *
 * Runtimes:
 *  - Iteration: O(n)
*/

// eslint-disable-next-line import/prefer-default-export
export const palindromeNumberIteration = (N) => {
  if (N < 0) return false;
  if (N < 10) return true;

  for (let start = N, end = 0; start > 0; start = Math.floor(start / 10)) {
    end = end * 10 + (start % 10);
    if (end === N) return true;
  }

  return false;
};
