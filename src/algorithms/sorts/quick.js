/* === Quick sort ===
 *
 * Quick sort is a divide-and-conquer algorithm, it works by selecting a pivot
 * element from the array and partitioning the other elements into two
 * subarrays, according to whether they are less than or greater than the pivot.
 * The subarrays are then sorted recursively, which can be done in-place,
 * requiring very small space overhead
 *
 * Runtime: O(n log n)
 * Space:   O(1) in place, O(n) immutable
*/

/* eslint-disable no-param-reassign */
const partition = (array, lo, hi) => {
  let pivot = lo;

  for (let i = lo + 1; i <= hi; i += 1) {
    if (array[i] < array[lo]) {
      pivot += 1;

      [array[i], array[pivot]] = [array[pivot], array[i]];
    }
  }

  [array[lo], array[pivot]] = [array[pivot], array[lo]];

  return pivot;
};
/* eslint-enable no-param-reassign */

// eslint-disable-next-line import/prefer-default-export
export const quickSort = (items) => {
  const sorted = Array.from(items);
  const { length } = sorted;

  for (let i = length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [sorted[i], sorted[j]] = [sorted[j], sorted[i]];
  }

  const qs = (lo, hi) => {
    if (lo < hi) {
      const index = partition(sorted, lo, hi);

      qs(lo, index - 1);
      qs(index + 1, hi);
    }

    return sorted;
  };

  return qs(0, length - 1);
};
