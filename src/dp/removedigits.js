/* === Remove N digits ===
 *
 * Given string S representing a non-negative integer, and an integer N,
 * return the smallest possible integer after removing N digits from S.
 *
 * Runtimes:
 *  Iteration: O(n)
*/

// eslint-disable-next-line import/prefer-default-export
export const removeDigitsIteration = (S, N) => {
  if (N <= 0) return S;
  if (!S || S.length === N) return '0';

  const digitStack = [];
  const digitArray = [...S];
  const { length } = digitArray;

  let removeCount = N;
  for (let i = 0; i < length; i += 1) {
    const digit = digitArray[i];
    while (digitStack.length && digit < digitStack[digitStack.length - 1] && removeCount > 0) {
      digitStack.pop();
      removeCount -= 1;
    }

    digitStack.push(digit);
  }

  for (let i = removeCount; i > 0; i -= 1) { digitStack.pop(); }
  while (digitStack.length && digitStack[0] === '0') { digitStack.shift(); }

  return digitStack.join('') || '0';
};
