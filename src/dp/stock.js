/* === Best time to buy & sell stock ===
 *
 * You are given an array A where Aᵢ is the price of a given stock on the ith
 * day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock
 * and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 *
 * Runtimes:
 *  Iteration: O(n)
*/

// eslint-disable-next-line import/prefer-default-export
export const stockIteration = (A) => {
  if (!A) return -1;

  const { length } = A;
  if (length < 2) return 0;

  let maxPeak = 0;
  let currentPeak = 0;
  for (let i = 1; i < length; i += 1) {
    currentPeak = Math.max(0, currentPeak + A[i] - A[i - 1]);
    maxPeak = Math.max(maxPeak, currentPeak);
  }

  return maxPeak;
};
