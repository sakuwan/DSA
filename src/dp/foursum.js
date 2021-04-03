/* === Four sum ===
 *
 * Given four lists A, B, C, D of integer values, compute how many tuples
 * (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.
 *
 * To make problem a bit easier, all A, B, C, D have same length of n where
 * 0 ≤ n ≤ 500. All integers are in the range of -2^28 to 2^28 - 1 and the
 * result is guaranteed to be at most 2^31 - 1.
 *
 * Runtimes:
 *  - Brute force iteration: O(n ^ 4)
 *  - Memoized complements:  O(n ^ 2)
*/

export const fourSumIteration = (A, B, C, D) => {
  if (!A || !B || !C || !D) return 0;

  const { length } = A;

  let zeroSumCount = 0;
  for (let i = 0; i < length; i += 1) {
    const a = A[i];

    for (let j = 0; j < length; j += 1) {
      const b = B[j];

      for (let k = 0; k < length; k += 1) {
        const c = C[k];

        for (let l = 0; l < length; l += 1) {
          if (a + b + c + D[l] === 0) zeroSumCount += 1;
        }
      }
    }
  }

  return zeroSumCount;
};

export const fourSumMemoization = (A, B, C, D) => {
  if (!A || !B || !C || !D) return 0;

  const abTable = new Map();
  const { length } = A;

  for (let i = 0; i < length; i += 1) {
    const a = A[i];

    for (let j = 0; j < length; j += 1) {
      const key = a + B[j];
      const entries = 1 + (abTable.get(key) ?? 0);
      abTable.set(key, entries);
    }
  }

  let complementCount = 0;
  for (let i = 0; i < length; i += 1) {
    const c = C[i];

    for (let j = 0; j < length; j += 1) {
      const key = -(c + D[j]);
      complementCount += abTable.get(key) ?? 0;
    }
  }

  return complementCount;
};
