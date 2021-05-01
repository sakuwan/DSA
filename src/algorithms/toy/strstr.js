/* === Implement strStr ===
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 *
 * Runtimes:
 *  Naive: O((n - m) * m)
*/

export const strStrNaive = (S1, S2) => {
  if (typeof S1 !== 'string' || typeof S2 !== 'string') return null;

  const s1Length = S1.length;
  const s2Length = S2.length;
  if (s2Length === 0) return 0;
  if (s1Length < s2Length) return -1;

  for (let i = 0; i < s1Length - s2Length + 1; i += 1) {
    for (let j = s2Length - 1; j >= 0; j -= 1) {
      const charA = S1[i + j];
      const charB = S2[j];

      if (charA !== charB) break;
      if (j === 0) return i;
    }
  }

  return -1;
};

export const strStrFunctional = (S1, S2) => S1.indexOf(S2);
