/* === Combination sum ===
 *
 * Given an array of distinct integers A and a target integer N, return a list
 * of all unique combinations of A where the chosen numbers sum to N. You may
 * return the combinations in any order. The same number may be chosen from
 * A an unlimited number of times. Two combinations are unique if the frequency
 * of at least one of the chosen numbers is different.
 *
 * Runtimes:
 *  Recursion: O(n^(N / min(A)))
*/

// eslint-disable-next-line import/prefer-default-export
export const combinationRecursion = (A, N) => {
  if (!A) return null;

  const { length } = A;
  if (length === 0) return [];
  if (length === 1) return N % A[0] === 0 ? [new Array(N / A[0]).fill(A[0])] : [];

  const validCombinations = [];
  const combinations = (remainder, current, offset) => {
    if (remainder === 0) validCombinations.push([...current]);

    for (let i = offset; i < length; i += 1) {
      const currentValue = A[i];
      if (currentValue <= remainder) {
        current.push(currentValue);
        combinations(remainder - currentValue, current, i);
        current.pop();
      }
    }
  };

  combinations(N, [], 0);

  return validCombinations;
};
