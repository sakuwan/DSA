/* === Longest common subsequence ===
 *
 * Given two sequences, find the length of longest subsequence present in
 * both of them. A subsequence is a sequence that appears in the same relative
 * order, but not necessarily contiguous.
 *
 * Runtimes:
 *  - Recursion:          O(2^n)
 *  - Memoized recursion: O(n^2)
 *  - Iteration:          O(n^2)
*/

import make2DArray from '../utils/make2DArray';

export const commonRecursion = (A, B) => {
  if (typeof A !== 'string' || typeof B !== 'string') return -1;

  const { length: lengthA } = A;
  const { length: lengthB } = B;

  if (!lengthA || !lengthB) return 0;

  const longestSubsequence = (n, m) => {
    if (!n || !m) return 0;
    if (A[n - 1] === B[m - 1]) return 1 + longestSubsequence(n - 1, m - 1);

    return Math.max(
      longestSubsequence(n - 1, m),
      longestSubsequence(n, m - 1),
    );
  };

  return longestSubsequence(lengthA, lengthB);
};

export const commonMemoization = (A, B) => {
  if (typeof A !== 'string' || typeof B !== 'string') return -1;

  const { length: lengthA } = A;
  const { length: lengthB } = B;

  if (!lengthA || !lengthB) return 0;

  const dp = make2DArray(lengthA + 1, lengthB + 1);

  const longestSubsequence = (n, m) => {
    if (!n || !m) return 0;

    if (dp[n][m]) return dp[n][m];

    if (A[n - 1] === B[m - 1]) {
      dp[n][m] = 1 + longestSubsequence(n - 1, m - 1);
    } else {
      dp[n][m] = Math.max(
        longestSubsequence(n - 1, m),
        longestSubsequence(n, m - 1),
      );
    }

    return dp[n][m];
  };

  return longestSubsequence(lengthA, lengthB);
};

export const commonIteration = (A, B) => {
  if (typeof A !== 'string' || typeof B !== 'string') return -1;

  const { length: lengthA } = A;
  const { length: lengthB } = B;

  if (!lengthA || !lengthB) return 0;

  const dp = make2DArray(lengthA + 1, lengthB + 1);

  for (let n = 1; n <= lengthA; n += 1) {
    for (let m = 1; m <= lengthB; m += 1) {
      if (A[n - 1] === B[m - 1]) {
        dp[n][m] = 1 + dp[n - 1][m - 1];
      } else {
        dp[n][m] = Math.max(dp[n - 1][m], dp[n][m - 1]);
      }
    }
  }

  return dp[lengthA][lengthB];
};
