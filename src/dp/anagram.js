/* === Anagrams of a string ===
 *
 * Given a single input string, write a function that produces all possible
 * anagrams of a string and outputs them as an array.
 *
 * Runtimes:
 *  - Iteration: O(n!)
*/

// eslint-disable-next-line import/prefer-default-export
export const anagramsIteration = (S) => {
  if (!S) return null;

  const chars = [...S];
  const { length } = chars;

  const anagrams = [S];
  const exchanges = Array.from({ length }, () => 0);

  let i = 0;
  while (i < length) {
    if (exchanges[i] < i) {
      const swapIndex = i % 2 === 1 ? exchanges[i] : 0;
      [chars[i], chars[swapIndex]] = [chars[swapIndex], chars[i]];

      anagrams.push(chars.join(''));

      exchanges[i] += 1;
      i = 0;
    } else {
      exchanges[i] = 0;
      i += 1;
    }
  }

  return anagrams;
};
