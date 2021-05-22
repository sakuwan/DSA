/* === Number of islands ===
 *
 * Given an m x n 2D binary grid A which represents a map of '1's (land) and
 * '0's (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. You may assume all four edges of the grid are
 * all surrounded by water.
 *
 * Runtimes:
 *  - Recursion: O(nm)
*/

// eslint-disable-next-line import/prefer-default-export
export const islandsRecursion = (A) => {
  if (!A) return -1;

  const rowCount = A.length;
  const colCount = rowCount && A[0].length;
  if (rowCount === 0 || colCount === 0) return 0;

  const exploreIslands = (row, col) => {
    if (row < 0 || row >= rowCount || col < 0 || col >= colCount) return false;
    if (A[row][col] === '0') return false;

    A[row][col] = '0'; // eslint-disable-line no-param-reassign

    exploreIslands(row + 1, col);
    exploreIslands(row - 1, col);
    exploreIslands(row, col + 1);
    exploreIslands(row, col - 1);

    return true;
  };

  let islandCount = 0;
  for (let row = 0; row < rowCount; row += 1) {
    for (let col = 0; col < colCount; col += 1) {
      if (A[row][col] === '1') {
        exploreIslands(row, col);

        islandCount += 1;
      }
    }
  }

  return islandCount;
};
