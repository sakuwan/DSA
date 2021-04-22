/* === Valid parentheses ===
 *
 * Given a string S containing just the characters: (, ), {, }, [, and ]
 * Determine if the input string is valid, meaning:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 * Runtimes:
 *  Iteration: O(n)
*/

// eslint-disable-next-line import/prefer-default-export
export const validIteration = (S) => {
  if (typeof S !== 'string' || !S) return false;

  const { length } = S;
  if (length === 1) return false;
  if (length % 2 !== 0) return false;

  const pairingMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const bracketStack = [];
  for (let i = 0; i < length; i += 1) {
    const current = S[i];
    if (current in pairingMap) {
      if (pairingMap[current] !== bracketStack.pop()) return false;
    } else {
      bracketStack.push(current);
    }
  }

  return bracketStack.length === 0;
};
