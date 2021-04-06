/* === Selection sort ===
 *
 * Perform linear scans, swapping the smallest element to the front, and
 * continuously scan until all elements are in place
 *
 * Runtime: O(n^2)
 * Space:   O(1) in place, O(n) immutable
*/

// eslint-disable-next-line import/prefer-default-export
export const selectionSort = (items) => {
  if (!items) return null;

  const sorted = Array.from(items);
  const { length } = sorted;

  let cursor = null;
  for (let i = 0; i < length; i += 1) {
    cursor = i;

    for (let j = i + 1; j < length; j += 1) {
      if (sorted[cursor] > sorted[j]) cursor = j;
    }

    if (cursor !== i) {
      [sorted[i], sorted[cursor]] = [sorted[cursor], sorted[i]];
    }
  }

  return sorted;
};
