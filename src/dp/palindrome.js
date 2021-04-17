/* === Palindrome ===
 *
 * Check whether or not a string is a palindrome -- a string that is read the
 * same forwards or backwards
 *
 * Runtimes:
 *  Recursion: O(N/2)
 *  Iteration: O(N/2)
 *  Functional: O(4N)
*/

export const palindromeRecursion = (S) => {
  if (typeof S !== 'string') return false;

  const palindrome = (x) => {
    const { length } = x;
    if (length < 2) return true;

    if (x[0] !== x[length - 1]) return false;

    return palindrome(x.substring(1, length - 1));
  };

  return palindrome(S);
};

export const palindromeIteration = (S) => {
  if (typeof S !== 'string') return false;

  const { length } = S;
  if (length < 2) return true;

  const halfLength = Math.floor(length / 2);
  for (let i = 0; i < halfLength; i += 1) {
    const lo = S[i];
    const hi = S[(length - 1) - i];

    if (lo !== hi) return false;
  }

  return true;
};

export const palindromeFunctional = (S) => (
  typeof S === 'string' && [...S].reverse().join('') === S
);
