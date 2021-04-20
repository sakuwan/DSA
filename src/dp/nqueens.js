/* === N Queens ===
 *
 * Write an algorithm to print all ways of arranging N queens on an N x N
 * chess board so that none of them share the same row, column or diagonal. In
 * this case "diagonal" means all diagonals, not just the two that bisects the
 * board.
 *
 * Runtimes:
 *  Recursion: O(n!)
*/

// eslint-disable-next-line import/prefer-default-export
export const queensRecursion = (N) => {
  if (typeof N !== 'number') return null;

  if (N === 0) return [];
  if (N === 1) return [['Q']];

  const isInvalid = (c, r) => (bc, br) => (
    c === bc || (bc + br) === (c + r) || (bc - br) === (c - r)
  );

  const validBoards = [];
  const checkBoard = (board, r) => {
    if (r === N) {
      const rowEntry = board.map((c) => 'Q'.padStart(c + 1, '.').padEnd(N, '.'));
      validBoards.push(rowEntry);
    } else {
      for (let c = 0; c < N; c += 1) {
        if (!board.some(isInvalid(c, r))) {
          board.push(c);
          checkBoard(board, r + 1);
          board.pop();
        }
      }
    }
  };

  checkBoard([], 0);

  return validBoards;
};
