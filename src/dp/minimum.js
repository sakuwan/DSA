/* === Minimum size subarray sum ===
 *
 * Given an array of positive integers A and a positive integer N, return the
 * minimal length of a contiguous subarray of which the sum is greater than or
 * equal to N. If there is no such subarray, return 0 instead.
 *
 * Runtimes:
 *  - Iteration: O(n)
*/

// eslint-disable-next-line import/prefer-default-export
export const minimumSizeIteration = (A, N) => {
  if (!A || N < 0) return -1;

  const { length } = A;
  if (length === 0) return -1;

  let minimumSize = Number.MAX_SAFE_INTEGER;
  for (let left = 0, right = 0, sum = 0; right < length; right += 1) {
    sum += A[right];

    while (sum >= N) {
      minimumSize = Math.min(minimumSize, right - left + 1);

      sum -= A[left];
      left += 1;
    }
  }

  return minimumSize === Number.MAX_SAFE_INTEGER ? 0 : minimumSize;
};
