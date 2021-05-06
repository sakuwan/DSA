/* === Fibonacci number ===
 *
 * Return the Nth Fibonacci number
 *
 * Runtimes:
 *  - Brute force recursion: O(2^n)
 *  - Memoized recursion:    O(n)
 *  - Optimized iteration:   O(n)
*/

export const fibonacciRecursion = (N) => {
  if (N < 2) return N;

  return fibonacciRecursion(N - 1) + fibonacciRecursion(N - 2);
};

export const fibonacciMemoized = (N) => {
  if (N < 2) return N;

  const dp = Array.from({ length: N }, () => -1);
  const fib = (n) => {
    if (n < 2) return n;

    if (dp[n] > 0) return dp[n];

    dp[n] = fib(n - 1) + fib(n - 2);

    return dp[n];
  };

  return fib(N);
};

export const fibonacciIteration = (N) => {
  if (N < 2) return N;

  let nMinusTwo = 0;
  let nMinusOne = 1;
  for (let i = 1; i < N; i += 1) {
    [nMinusTwo, nMinusOne] = [nMinusOne, nMinusTwo + nMinusOne];
  }

  return nMinusOne;
};
