/* === Longest increasing subsequence ===
 *
 * The Longest increasing subsequence (LIS) problem is to find the length of
 * the longest subsequence of a given sequence such that all elements of the
 * subsequence are sorted in increasing order.
 *
 * Runtimes:
 *  Recursion:               O(2^n)
 *  Memoized iteration:      O(n^2)
 *  Binary search iteration: O(n log n)
*/

import { bisectLeft } from '../utils/bisect';

export const increasingRecursion = (A) => {
  if (!A || !A.length) return 0;

  const { length } = A;
  if (length === 1) return 1;

  let maximumSequence = 1;
  const longestSubsequence = (n) => {
    if (n === 1) return 1;

    let localMaximum = 1;
    for (let i = 1; i < n; i += 1) {
      const currentMaximum = 1 + longestSubsequence(i);
      if (A[i - 1] < A[n - 1]) {
        localMaximum = Math.max(localMaximum, currentMaximum);
      }
    }

    maximumSequence = Math.max(maximumSequence, localMaximum);

    return localMaximum;
  };

  return longestSubsequence(length);
};

export const increasingMemoization = (A) => {
  if (!A || !A.length) return 0;

  const { length } = A;
  if (length === 1) return 1;

  const dp = Array.from(A, () => 1);

  for (let i = 1; i < length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (A[j] < A[i]) dp[i] = Math.max(dp[i], 1 + dp[j]);
    }
  }

  return Math.max(...dp);
};

export const increasingIteration = (A) => {
  if (!A || !A.length) return 0;

  const { length } = A;
  if (length === 1) return 1;

  const dp = [A[0]];
  for (let i = 0; i < length; i += 1) {
    const valueIndex = bisectLeft(dp, A[i]);
    dp[valueIndex] = A[i];
  }

  return dp.length;
};
