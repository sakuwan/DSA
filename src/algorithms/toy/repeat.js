/* === Implement String.repeat ===
 *
 * Implement the native String.repeat method, ideally with better than O(n)
 * performance.
 *
 * Runtimes:
 *  - Naive: O(n)
 *  - Optimized: O(log n) // Technically, O(log2 n + log2(n - 2 ** log2 n) + 1)
*/

export const naiveRepeat = (S, N) => {
  if (!S || N < 0) return '';

  let repeatCount = N - 1;

  let resultString = S;
  while (repeatCount > 0) {
    repeatCount -= 1;
    resultString += S;
  }

  return resultString;
};

export const optimizedRepeat = (S, N) => {
  if (!S || N < 0) return '';

  let repeatCount = N;
  let repeatedString = S;

  let resultString = '';
  while (repeatCount > 0) {
    if (repeatCount % 2 === 1) { // Optionally, repeatCount & 1
      resultString += repeatedString;
    }

    if (repeatCount > 1) {
      repeatedString += repeatedString;
    }

    repeatCount = Math.floor(repeatCount / 2); // Optionally, repeatCount >>= 1;
  }

  return resultString;
};
