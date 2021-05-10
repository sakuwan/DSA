/* === Rotate array ===
 *
 * Given an array, rotate the array to the right by N steps, where N is
 * non-negative.
 *
 * Modify the array in-place.
 *
 * Runtimes:
 *  - Functional:         O(nk)
 *  - Functional slicing: O(n)
 *  - Reversing:          O(n)
*/

export const rotateFunctional = (A, N) => {
  if (!A) return null;

  for (let i = 0; i < N; i += 1) {
    A.unshift(A.pop());
  }

  return A;
};

export const rotateFunctionalSlice = (A, N) => {
  if (!A) return null;

  const { length } = A;
  A.unshift(...A.splice(length - (N % length)));

  return A;
};

/* eslint-disable no-param-reassign */
export const rotateReversing = (A, N) => {
  if (!A) return null;

  const reverse = (a, b) => {
    for (let i = a, j = b; i < j; i += 1, j -= 1) {
      [A[i], A[j]] = [A[j], A[i]];
    }
  };

  const { length } = A;
  const rotateAmount = N % length;

  reverse(0, length - 1);
  reverse(0, rotateAmount - 1);
  reverse(rotateAmount, length - 1);

  return A;
};
/* eslint-enable no-param-reassign */
