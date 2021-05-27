/* === Repeated DNA sequences ===
 *
 * The DNA sequence is composed of a series of nucleotides abbreviated as 'A',
 * 'C', 'G', and 'T'.
 *
 * For example, "ACGAATTCCG" is a DNA sequence.
 * When studying DNA, it is useful to identify repeated sequences within the
 * DNA.
 *
 * Given a string S that represents a DNA sequence, return all the 10 letter
 * sequences (substrings) that occur more than once in a DNA molecule. You may
 * return the answer in any order.
 *
 * Runtimes:
 *  - Hashmap iteration:    O(n)
 *  - Bitwise rolling hash: O(n)
*/

export const hashmapDNAIteration = (S) => {
  if (!S) return null;

  const { length } = S;
  if (length < 11) return [];

  let currentSubarray = S.slice(0, 10);

  const dp = new Set([currentSubarray]);
  const repeatedSequences = new Set();

  for (let i = 10; i < length; i += 1) {
    currentSubarray = currentSubarray.slice(1) + S[i];
    if (dp.has(currentSubarray)) {
      repeatedSequences.add(currentSubarray);
    }

    dp.add(currentSubarray);
  }

  return [...repeatedSequences];
};

/* eslint-disable no-bitwise */
export const bitwiseDNAIteration = (S) => {
  if (!S) return null;

  const { length } = S;
  if (length < 11) return [];

  const DNA_MAP = {
    A: 0,
    C: 1,
    G: 2,
    T: 3,
  };

  let bithash = 0;
  for (let i = 0; i < 10; i += 1) {
    bithash <<= 2;
    bithash |= DNA_MAP[S[i]];
  }

  const dp = new Set([bithash]);
  const repeatedSequences = new Set();

  for (let i = 10; i < length; i += 1) {
    bithash <<= 2;
    bithash &= 0xFFFFF;
    bithash |= DNA_MAP[S[i]];

    if (dp.has(bithash)) {
      repeatedSequences.add(S.slice(i - 9, i + 1));
    } else {
      dp.add(bithash);
    }
  }

  return [...repeatedSequences];
};
/* eslint-enable no-bitwise */
