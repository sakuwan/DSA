/* === Merge sort ===
 *
 * Merge sort is a divide-and-conquer algorithm based on the idea of breaking
 * down an array into several subarrays until each subarray consists of a
 * single element, then merging those subarrays results in a sorted array
 *
 * Runtime: O(n log n)
 * Space:   O(n)
*/

/* eslint-disable no-param-reassign, no-plusplus */
const merge = (items, length, width, index, buffer) => {
  let left = index;
  let right = Math.min(left + width, length);

  const leftEnd = right;
  const rightEnd = Math.min(right + width, length);

  let i = index;

  while (left < leftEnd && right < rightEnd) {
    buffer[i++] = (items[left] <= items[right]) ? items[left++] : items[right++];
  }

  while (left < leftEnd) {
    buffer[i++] = items[left++];
  }

  while (right < rightEnd) {
    buffer[i++] = items[right++];
  }
};
/* eslint-enable no-param-reassign, no-plusplus */

// eslint-disable-next-line import/prefer-default-export
export const mergeSort = (items) => {
  let sorted = Array.from(items);
  const { length } = sorted;

  let buffer = new Array(length);

  for (let width = 1; width < length; width *= 2) {
    for (let i = 0; i < length; i += 2 * width) {
      merge(sorted, length, width, i, buffer);
    }

    [sorted, buffer] = [buffer, sorted];
  }

  return sorted;
};
