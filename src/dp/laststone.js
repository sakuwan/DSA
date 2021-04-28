/* === Last stone weight ===
 *
 * You are given an array of integers A where A[i] is the weight of stone.
 * We are playing a game with the stones. On each turn, we choose any two
 * stones and smash them together. Suppose the stones have weights x and y with
 * x <= y. The result of this smash is:
 *  - If x == y, both stones are destroyed, and
 *  - If x != y, the stone of weight x is destroyed, and the stone of weight y
 *    has new weight y - x.
 *
 * At the end of the game, there is at most one stone left.
 *
 * Return the smallest possible weight of the left stone. If there are no
 * stones left, return 0.
 *
 * Runtimes:
 *  Greedy memoized iteration:     O(n * s)
 *  Single-set memoized iteration: O(n * s)
*/

export const lastStoneSetIteration = (A) => {
  let dp = { 0: null };

  for (let i = 0; i < A.length; i += 1) {
    const sumKeys = Object.keys(dp).reduce((a, k) => ({ ...a, [+k + A[i]]: null }), {});
    const absKeys = Object.keys(dp).reduce((a, k) => ({ ...a, [Math.abs(+k - A[i])]: null }), {});

    dp = { ...sumKeys, ...absKeys };
  }

  return Math.min(...Object.keys(dp).map((x) => +x));
};

export const lastStoneIteration = (A) => {
  if (!A) return -1;

  const { length } = A;
  if (length === 0) return 0;
  if (length === 1) return A[0];

  const totalSum = A.reduce((a, c) => a + c);
  const halfSum = Math.floor(totalSum / 2);

  const dp = Array.from({ length: halfSum + 1 }, (_, i) => i === 0);
  for (let i = 0; i < A.length; i += 1) {
    const currentStone = A[i];

    for (let j = halfSum; j >= currentStone; j -= 1) {
      dp[j] += dp[j - currentStone];
    }
  }

  for (let i = halfSum; i >= 0; i -= 1) {
    if (dp[i]) return totalSum - 2 * i;
  }

  return 0;
};
