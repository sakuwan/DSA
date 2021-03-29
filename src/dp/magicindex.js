/* === Magic index ===
 *
 * A magic index in an array A[0...n-1] is defined to be an index such that
 * A[i] = i. Given a sorted array of distinct integers, write a method to find a
 * magic index, if one exists, in array A.
 *
 * Runtimes:
 *  - Brute force iteration:   O(n)
 *  - Binary search recursion: O(log n)
*/

export const magicIteration = (A) => {
  if (!A || !A.length) return -1;

  for (let i = 0; i < A.length; i += 1) {
    if (i === A[i]) return i;
  }

  return -1;
};

export const magicRecursion = (A) => {
  if (!A || !A.length) return -1;

  const magicIndex = (start, end) => {
    if (start > end) return -1;

    const middle = Math.floor((start + end) / 2);
    if (middle === A[middle]) return middle;

    const left = magicIndex(start, Math.min(middle - 1, A[middle]));
    if (left >= 0) return left;

    return magicIndex(Math.max(middle + 1, A[middle]), end);
  };

  return magicIndex(0, A.length - 1);
};
