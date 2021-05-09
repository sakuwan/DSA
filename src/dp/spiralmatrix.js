/* === Spiral matrix ===
 *
 * Given an m x n matrix A, return all elements of the matrix in spiral order.
 *
 * For example, given the input matrix [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
 * return the array [1, 2, 3, 6, 9, 8, 7, 4, 5].
 *
 * Runtimes:
 *  - Iteration: O(nm)
*/

// eslint-disable-next-line import/prefer-default-export
export const spiralIteration = (A) => {
  if (!A) return null;

  const colCount = A.length;
  if (!colCount) return [];

  const rowCount = A[0].length;
  if (!rowCount) return [];

  let c1 = 0;
  let c2 = colCount - 1;

  let r1 = 0;
  let r2 = rowCount - 1;

  const spiralEntries = [];
  while (spiralEntries.length < rowCount * colCount) {
    for (let c = c1; c <= c2; c += 1) spiralEntries.push(A[r1][c]);
    for (let r = r1 + 1; r <= r2; r += 1) spiralEntries.push(A[r][c2]);

    if (r1 < r2 && c1 < c2) {
      for (let c = c2 - 1; c > c1; c -= 1) spiralEntries.push(A[r2][c]);
      for (let r = r2; r > r1; r -= 1) spiralEntries.push(A[r][c1]);
    }

    r1 += 1;
    r2 -= 1;
    c1 += 1;
    c2 -= 1;
  }

  return spiralEntries;
};
