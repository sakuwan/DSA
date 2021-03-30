/* === Median ===
 *
 * Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * return the median of the two sorted arrays.
 *
 * Runtimes:
 *  - Merge:      O(n log n)
 *  - Iteration:  O(log m + n)
*/

export const medianMerge = (A, B) => {
  if ((!A) || (!B) || (!A.length && !B.length)) return null;

  const mergedArray = [...A, ...B].sort((a, b) => a - b);
  if (mergedArray.length === 1) return mergedArray[0];

  const middleIndex = Math.floor(mergedArray.length / 2);

  return mergedArray.length % 2 === 0
    ? (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2
    : mergedArray[middleIndex];
};

export const medianIteration = (A, B) => {
  if ((!A) || (!B) || (!A.length && !B.length)) return null;

  const fullLength = A.length + B.length;
  const middleIndex = Math.floor(fullLength / 2) + 1;

  let currentValue = 0;
  let previousValue = 0;
  for (let i = 0, j = 0, k = 0; i < middleIndex; i += 1) {
    previousValue = currentValue;

    const leftValue = j >= A.length ? Infinity : A[j];
    const rightValue = k >= B.length ? Infinity : B[k];

    if (leftValue < rightValue) {
      currentValue = A[j];
      j += 1;
    } else {
      currentValue = B[k];
      k += 1;
    }
  }

  return fullLength % 2 === 0
    ? (currentValue + previousValue) / 2
    : currentValue;
};
