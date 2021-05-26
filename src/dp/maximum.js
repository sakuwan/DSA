/* === Maximum sum subarray ===
 *
 * Write an efficient program to find the sum of contiguous subarray within a
 * one-dimensional array of numbers that has the largest sum, with indices.
 *
 * Runtimes:
 *  - Iteration:                 O(n)
 *  - Space-optimized iteration: O(n)
*/

// eslint-disable-next-line import/prefer-default-export
export const maxSubarray = (A) => {
  if (!A || !A.length) return null;

  const { length } = A;
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

export const maxOptimizedSubarray = (A) => {
  if (!A) return null;

  const { length } = A;
  if (length < 1) return null;
  if (length === 1) return { value: A[0], indices: [0, 0] };

  let peakMaximum = Number.MIN_SAFE_INTEGER;
  const peakIndices = [0, 0];

  let currentStart = 0;
  let currentMaximum = 0;
  for (let i = 0; i < length; i += 1) {
    currentMaximum += A[i];
    if (peakMaximum < currentMaximum) {
      peakMaximum = currentMaximum;
      peakIndices[0] = currentStart;
      peakIndices[1] = i;
    }

    if (currentMaximum < 0) {
      currentMaximum = 0;
      currentStart = i + 1;
    }
  }

  return {
    value: peakMaximum,
    indices: peakIndices,
  };
};
