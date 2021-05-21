/* === Pascal's triangle ===
 *
 * Generate Pascal's triangle to a given depth N.
 *
 * Runtimes:
 *  Iteration: O(n^2)
*/

// eslint-disable-next-line import/prefer-default-export
export const pascalsIteration = (N) => {
  if (N < 1) return null;
  if (N === 1) return [[1]];

  const pascalArray = [[1]];
  for (let i = 1; i < N; i += 1) {
    const nextRow = Array.from({ length: i + 1 }, (_, j) => {
      if (j === 0 || j === i) return 1;

      return pascalArray[i - 1][j - 1] + pascalArray[i - 1][j];
    });

    pascalArray.push(nextRow);
  }

  return pascalArray;
};
