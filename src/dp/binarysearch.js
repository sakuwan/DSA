/* === Binary search ===
 *
 * Binary search, also known as logarithmic search, is a search algorithm that
 * finds the position of a target value within a sorted array. Binary search
 * compares the target value to the middle element of the array. If they are
 * not equal, the half in which the target cannot lie is eliminated and the
 * search continues on the remaining half, again taking the middle element to
 * compare to the target value, and repeating this until the target value is
 * found. If the search ends with the remaining half being empty, the target is
 * not in the array.
 *
 * Runtimes:
 *  - Recursion: O(log n)
 *  - Iteration: O(log n)
*/

export const binaryRecursion = (A, N) => {
  if (!A) return null;

  const fullLength = A.length;
  if (fullLength === 0) return null;
  if (fullLength === 1) return A[0];

  const search = (xs, i) => {
    const { length } = xs;

    const half = Math.floor(length / 2);

    const value = xs[half];
    if (value === N) return i + half;

    if (length === 1) return -1;

    if (value < N) return search(xs.slice(half), i + half);

    return search(xs.slice(0, half), i);
  };

  return search(A, 0);
};

export const binaryIteration = (A, N) => {
  if (!A) return null;

  const { length } = A;
  if (length === 0) return null;
  if (length === 1) return A[0];

  let lo = 0;
  let hi = length - 1;

  while (hi - lo > 0) {
    const mid = Math.floor((hi - lo) / 2) + lo;

    const value = A[mid];
    if (value === N) return mid;

    if (value < N) {
      lo = mid + 1;
    } else if (value > N) {
      hi = mid - 1;
    }
  }

  return -1;
};
