/* === Rainwater ===
 *
 * Given an array A of n non-negative integers representing an elevation map
 * where the width of each bar is 1, compute how much water it is able to trap
 * after raining.
 *
 * Runtimes:
 *  Iteration: O(n)
*/

// eslint-disable-next-line import/prefer-default-export
export const rainIteration = (A) => {
  if (!A) return -1;

  const { length } = A;
  if (length < 3) return 0;

  let largestAmount = 0;

  let leftMax = 0;
  let rightMax = 0;
  for (let l = 0, r = length - 1; l < r;) {
    const currentLeft = A[l];
    const currentRight = A[r];

    leftMax = Math.max(leftMax, currentLeft);
    if (currentLeft < leftMax) {
      largestAmount += leftMax - currentLeft;
    }

    rightMax = Math.max(rightMax, currentRight);
    if (currentRight < rightMax) {
      largestAmount += rightMax - currentRight;
    }

    if (currentLeft < currentRight) {
      l += 1;
    } else {
      r -= 1;
    }
  }

  return largestAmount;
};
