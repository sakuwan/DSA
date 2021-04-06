/* === Insertion sort ===
 *
 * Insertion sort iterates, consuming one input element each repetition, and
 * grows a sorted output list. At each iteration, insertion sort removes one
 * element from the input data, finds the location it belongs within the sorted
 * list, and inserts it there. It repeats until no input elements remain.
 *
 * Runtime: O(n^2)
 * Space:   O(1) in place, O(n) immutable
*/

// eslint-disable-next-line import/prefer-default-export
export const insertionSort = (items) => {
  if (!items) return null;

  const sorted = Array.from(items);
  const { length } = sorted;

  for (let i = 1; i < length; i += 1) {
    for (let j = i; sorted[j] < sorted[j - 1]; j -= 1) {
      [sorted[j], sorted[j - 1]] = [sorted[j - 1], sorted[j]];
    }
  }

  return sorted;
};
