/* === Robot ===
 *
 * Imagine a robot sitting on the upper left corner of grid with r rows and
 * c columns. The robot can only move in 2 directions, right and down, but
 * certain cells are "off limits" such that the robot cannot step on them.
 * Design an algorithm to find a path for the robot from the top left to the
 * bottom right.
 *
 * Runtimes:
 *  - Brute force recursion: O(2^(r+c))
 *  - Memoized recursion:    O(rc)
*/

import make2DArray from '../utils/make2DArray';

const formatGrid = (grid, path) => {
  const gridWidth = grid[0].length;
  const gridHeight = grid.length;

  const gridFn = (row, col) => {
    if (path.has(`${row}:${col}`)) return '#';

    return grid[row][col] ? '░' : '█';
  };

  return make2DArray(gridHeight, gridWidth, gridFn).reduce(
    (a, x) => `${a}${x.join(' ')}\n`, '',
  );
};

export const robotRecursion = (grid) => {
  if (!grid || !grid.length) return null;

  const gridWidth = grid[0].length - 1;
  const gridHeight = grid.length - 1;

  const gridPath = new Set();
  const findPath = (r, c) => {
    if (r < 0 || c < 0 || !grid[r][c]) return false;

    if ((r === 0 && c === 0) || findPath(r - 1, c) || findPath(r, c - 1)) {
      gridPath.add(`${r}:${c}`);

      return true;
    }

    return false;
  };

  return findPath(gridHeight, gridWidth)
    ? formatGrid(grid, gridPath)
    : null;
};

export const robotMemoization = (grid) => {
  if (!grid || !grid.length) return null;

  const gridWidth = grid[0].length - 1;
  const gridHeight = grid.length - 1;

  const gridPath = new Set();
  const invalidNodes = new Set();
  const findPath = (r, c) => {
    if (r < 0 || c < 0 || !grid[r][c]) return false;

    const nodeKey = `${r}:${c}`;
    if (invalidNodes.has(nodeKey)) return false;

    if ((r === 0 && c === 0) || findPath(r - 1, c) || findPath(r, c - 1)) {
      gridPath.add(nodeKey);

      return true;
    }

    invalidNodes.add(nodeKey);
    return false;
  };

  return findPath(gridHeight, gridWidth)
    ? formatGrid(grid, gridPath)
    : null;
};
