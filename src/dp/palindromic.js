/* === Longest palindromic subsequence ===
 *
 * The longest palindromic subsequence is the longest sequence of characters in
 * a string that spells the same forwards and backward. A subsequence differs
 * from a substring since characters in a subsequence are not required to be at
 * consecutive positions in the original string.
 *
 * Runtime:
 *  - Recursion:          O(2^n)
 *  - Memoized recursion: O(n^2)
 *  - Iteration:          O(n^2)
*/

import make2DArray from '../utils/make2DArray';

export const palindromicRecursion = (S) => {
  if (!S || !S.length) return 0;

  const { length } = S;
  if (length === 1) return 1;

  const longestSubsequence = (n, m) => {
    if (n === m) return 1;

    if (S[n] === S[m]) {
      return 2 + ((n + 1 === m) ? 0 : longestSubsequence(n + 1, m - 1));
    }

    return Math.max(
      longestSubsequence(n + 1, m),
      longestSubsequence(n, m - 1),
    );
  };

  return longestSubsequence(0, length - 1);
};

export const palindromicMemoization = (S) => {
  if (!S || !S.length) return 0;

  const { length } = S;
  if (length === 1) return 1;

  const dp = make2DArray(length, length, null);
  const longestSubsequence = (n, m) => {
    if (n > m) return 0;
    if (n === m) return 1;

    if (dp[n][m] !== null) return dp[n][m];
    if (S[n] === S[m]) {
      dp[n][m] = 2 + ((n + 1 === m) ? 0 : longestSubsequence(n + 1, m - 1));
    } else {
      dp[n][m] = Math.max(
        longestSubsequence(n + 1, m),
        longestSubsequence(n, m - 1),
      );
    }

    return dp[n][m];
  };

  return longestSubsequence(0, length - 1);
};

export const palindromicIteration = (S) => {
  if (!S || !S.length) return 0;

  const { length } = S;
  if (length === 1) return 1;

  const dp = make2DArray(length, length, (r, c) => ((r === c) ? 1 : 0));

  for (let distance = 1; distance < length; distance += 1) {
    for (let n = 0, m = distance; m < length; n += 1, m += 1) {
      if (S[n] === S[m]) {
        dp[n][m] = 2 + dp[n + 1][m - 1];
      } else {
        dp[n][m] = Math.max(dp[n + 1][m], dp[n][m - 1]);
      }
    }
  }

  return dp[0][length - 1];
};
