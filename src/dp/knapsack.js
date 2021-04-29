/* === Knapsack ===
 *
 * The knapsack problem is a problem in combinatorial optimization: Given a set
 * of items, each with a weight and a value, determine the number of each item
 * to include in a collection so that the total weight is less than or equal to
 * a given limit and the total value is as large as possible.
 *
 * It derives its name from the problem faced by someone who is constrained by
 * a fixed-size knapsack and must fill it with the most valuable items.
 * The problem often arises in resource allocation where the decision makers
 * have to choose from a set of non-divisible projects or tasks under a fixed
 * budget or time constraint, respectively.
 *
 * Runtimes:
 *  Brute-force recursion: O(2^n)
 *  Memoized recursion: O(nm)
*/

export const knapsackRecursion = (V, W, N) => {
  if (!V || !W) return -1;

  const { length } = V;
  if (W.length !== length) return -1;

  const knapsack = (remainder, offset) => {
    if (remainder === 0 || offset < 0) return 0;

    const itemWeight = W[offset];
    if (itemWeight > remainder) return knapsack(remainder, offset - 1);

    const itemValue = V[offset];
    return Math.max(
      knapsack(remainder - itemWeight, offset - 1) + itemValue,
      knapsack(remainder, offset - 1),
    );
  };

  return knapsack(N, length - 1);
};

export const knapsackMemoization = (V, W, N) => {
  if (!V || !W) return -1;

  const { length } = V;
  if (W.length !== length) return -1;

  const dp = Array.from({ length: length + 1 }, () => Array.from({ length: N + 1 }, () => -1));
  const knapsack = (remainder, offset) => {
    if (remainder === 0 || offset < 0) return 0;

    if (dp[offset][remainder] !== -1) return dp[offset][remainder];

    const itemWeight = W[offset];
    if (itemWeight > remainder) {
      dp[offset][remainder] = knapsack(remainder, offset - 1);

      return dp[offset][remainder];
    }

    const itemValue = V[offset];
    dp[offset][remainder] = Math.max(
      knapsack(remainder - itemWeight, offset - 1) + itemValue,
      knapsack(remainder, offset - 1),
    );

    return dp[offset][remainder];
  };

  return knapsack(N, length - 1);
};
