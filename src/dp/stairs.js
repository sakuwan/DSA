/* === Stairs ===
 *
 * A child is running up a staircase with n steps and can hop either 1 step,
 * 2 steps, or 3 steps at a time. Implement a method to count how many possible
 * ways the child can run up the stairs.
 *
 * Runtimes:
 *  - Brute force recursion O(n^3)
 *  - Memoized recursion    O(n)
 *  - Bottom-up iteration   O(n)
*/

export const stairsRecursion = (N) => {
  if (N <= 1) return 1;
  if (N === 2) return 2;
  if (N === 3) return 4;

  return stairsRecursion(N - 1) + stairsRecursion(N - 2) + stairsRecursion(N - 3);
};

export const stairsMemoized = (N) => {
  const dp = Array.from({
    0: 1, 1: 1, 2: 2, 3: 4, length: N + 1,
  }, (x) => x ?? 0);

  const countSteps = (x) => {
    if (dp[x] > 0) return dp[x];

    dp[x] = countSteps(x - 1) + countSteps(x - 2) + countSteps(x - 3);

    return dp[x];
  };

  return countSteps(N);
};

export const stairsIterative = (N) => {
  const dp = Array.from({
    0: 1, 1: 1, 2: 2, 3: 4, length: N + 1,
  }, (x) => x ?? 0);

  for (let i = 4; i <= N; i += 1) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[N];
};
