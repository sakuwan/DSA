/* === Maximum sum subarray ===
 *
 * Write an efficient program to find the sum of contiguous subarray within a one-dimensional array
 * of numbers that has the largest sum, with indices.
 *
 * Runtimes:
 *  - Iteration: O(n)
*/

// eslint-disable-next-line import/prefer-default-export
export const maxSubarray = (A) => {
  if (!A) return null;

  const { length } = A;
  if (!length) return null;
  if (length === 1) return { value: A[0], indices: [0, 0] };

  const dp = Array.from({ length }, (_, i) => ((i === 0) ? A[i] : 0));
  for (let i = 1; i < length; i += 1) {
    dp[i] = Math.max(dp[i - 1] + A[i], A[i]);
  }

  const maximumValue = Math.max(...dp);
  const endIndex = dp.indexOf(maximumValue);

  let startIndex = endIndex;
  let endValue = A[endIndex];
  while (endValue !== maximumValue) {
    endValue += A[--startIndex]; // eslint-disable-line no-plusplus
  }

  return {
    value: maximumValue,
    indices: [startIndex, endIndex],
  };
};