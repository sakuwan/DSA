/* === Bubble sort ===
 *
 * Continuously swap pairs if the lhs is greater, sweeping the array until
 * an iteration with zero swaps
 *
 * Runtime: O(n^2)
 * Space:   O(1)
*/

// eslint-disable-next-line import/prefer-default-export
export const bubbleSort = (items) => {
  if (!items) return null;

  const sorted = Array.from(items);
  const { length } = sorted;

  let hasSwapped = false;
  do {
    hasSwapped = false;

    for (let i = 0; i < length; i += 1) {
      if (sorted[i] > sorted[i + 1]) {
        [sorted[i], sorted[i + 1]] = [sorted[i + 1], sorted[i]];

        hasSwapped = true;
      }
    }
  } while (hasSwapped);

  return sorted;
};
