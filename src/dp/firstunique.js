/* === First unique character in a string ===
 *
 * Given a string s, return the first non-repeating character in it and return
 * its index. If it does not exist, return -1.
 *
 * Runtimes:
 *  - Iteration: O(2n)
 *  - Functional: O(n^2)
*/

export const firstUniqueIteration = (S) => {
  if (!S || !S.length) return -1;

  const charMap = new Map();
  for (let i = 0; i < S.length; i += 1) {
    const charCount = charMap.get(S[i]) ?? 0;
    charMap.set(S[i], charCount + 1);
  }

  for (let i = 0; i < S.length; i += 1) {
    if (charMap.get(S[i]) === 1) return i;
  }

  return -1;
};

export const firstUniqueFunctional = (S) => {
  if (!S || !S.length) return -1;

  for (let i = 0; i < S.length; i += 1) {
    if (S.indexOf(S[i]) === S.lastIndexOf(S[i])) return i;
  }

  return -1;
};
