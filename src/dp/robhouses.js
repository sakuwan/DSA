/* === Rob houses ===
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed, the only constraint stopping
 * you from robbing each of them is that adjacent houses have security systems
 * connected and it will automatically contact the police if two adjacent
 * houses were broken into on the same night.
 *
 * Given an integer array A representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the
 * police.
 *
 * Runtimes:
 *  Memoized recursion: O(n)
 *  Iteration:          O(n)
*/

export const robRecursion = (A) => {
  if (!A) return -1;

  const { length } = A;
  if (length === 0) return 0;
  if (length === 1) return A[0];
  if (length === 2) return Math.max(A[0], A[1]);

  const dp = Array.from({ length }, () => -1);
  const robHouses = (n) => {
    if (n < 0) return 0;
    if (dp[n] >= 0) return dp[n];

    dp[n] = Math.max(A[n] + robHouses(n - 2), robHouses(n - 1));

    return dp[n];
  };

  return robHouses(length - 1);
};

export const robIteration = (A) => {
  if (!A) return -1;

  const { length } = A;
  if (length === 0) return 0;
  if (length === 1) return A[0];
  if (length === 2) return Math.max(A[0], A[1]);

  let twoMaximum = A[0];
  let oneMaximum = Math.max(A[0], A[1]);
  for (let i = 2; i < length; i += 1) {
    const currentMaximum = Math.max(A[i] + twoMaximum, oneMaximum);

    twoMaximum = oneMaximum;
    oneMaximum = currentMaximum;
  }

  return oneMaximum;
};
