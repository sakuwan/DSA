/* === Count primes ===
 *
 * Count the number of prime numbers less than a non-negative number, N.
 *
 * Runtimes:
 *  - Iteration: O(n log log n)
*/

// eslint-disable-next-line import/prefer-default-export
export const primesIteration = (N) => {
  if (N < 3) return 0;

  const dp = Array.from({ length: N }, (_, i) => i > 1);
  for (let i = 2; i * i < N; i += 1) {
    if (dp[i]) {
      for (let j = i * i; j < N; j += i) {
        dp[j] = false;
      }
    }
  }

  return dp.filter((x) => x).length;
};
