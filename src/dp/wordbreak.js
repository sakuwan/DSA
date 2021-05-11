/* === Word break ===
 *
 * Given a string S and a dictionary of strings A, return true if S can be
 * segmented into a space-separated sequence of one or more dictionary words.
 *
 * Note that the same word in the dictionary may be reused multiple times in
 * the segmentation.
 *
 * Runtimes:
 *  - Brute-force recursion: O(2^n)
 *  - BFS                  : O(n^2)
*/

export const wordBreakRecursion = (S, A) => {
  if (!S || !A || !A.length) return false;

  const { length } = S;
  const wordBreak = (n) => {
    if (n === length) return true;

    for (let i = n + 1; i <= length; i += 1) {
      const currentSlice = S.substring(n, i);
      const isInDictionary = A.includes(currentSlice);

      if (isInDictionary && wordBreak(i)) return true;
    }

    return false;
  };

  return wordBreak(0);
};

export const wordBreakBFS = (S, A) => {
  if (!S || !A || !A.length) return false;

  const { length } = S;

  const queue = [0];
  const dp = new Set();

  while (queue.length > 0) {
    const start = queue.shift();

    if (dp.has(start)) continue; // eslint-disable-line no-continue

    for (let end = start + 1; end <= length; end += 1) {
      const currentSlice = S.slice(start, end);
      const isInDictionary = A.includes(currentSlice);

      if (isInDictionary) {
        if (end === length) return true;

        queue.push(end);
      }
    }

    dp.add(start);
  }

  return false;
};
