/* === Edit distance ===
 *
 * Edit distance is a way of quantifying how dissimilar two strings
 * (e.g., words) are to one another by counting the minimum number of
 * operations required to transform one string into the other.
 *
 * Runtimes:
 *  - Recursion: O(3^n)
 *  - Iteration: O(nm)
*/

import make2DArray from '../utils/make2DArray';

export const editDistanceRecursion = (A, B) => {
  if (typeof A !== 'string' || typeof B !== 'string') return -1;

  const { length: lengthA } = A;
  const { length: lengthB } = B;

  if (!lengthA) return lengthB;
  if (!lengthB) return lengthA;

  const editDistance = (n, m) => {
    if (!n) return m;
    if (!m) return n;

    if (A[n - 1] === B[m - 1]) return editDistance(n - 1, m - 1);

    return Math.min(
      1 + editDistance(n - 1, m),
      1 + editDistance(n, m - 1),
      2 + editDistance(n - 1, m - 1),
    );
  };

  return editDistance(lengthA, lengthB);
};

export const editDistanceIteration = (A, B) => {
  if (typeof A !== 'string' || typeof B !== 'string') return -1;

  const { length: lengthA } = A;
  const { length: lengthB } = B;

  if (!lengthA) return lengthB;
  if (!lengthB) return lengthA;

  const dp = make2DArray(lengthA + 1, lengthB + 1, (r, c) => {
    if (!r && c) return c;
    if (!c && r) return r;

    return 0;
  });

  for (let i = 1; i < lengthA + 1; i += 1) {
    for (let j = 1; j < lengthB + 1; j += 1) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (A[i - 1] === B[j - 1] ? 0 : 2),
      );
    }
  }

  return dp[lengthA][lengthB];
};
