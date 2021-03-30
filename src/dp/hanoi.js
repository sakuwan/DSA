/* === Towers of Hanoi ===
 *
 * In the classic problem of the Towers of Hanoi, you have 3 towers and N disks
 * of different sizes which can slide onto any tower. The puzzle starts with
 * disks sorted in ascending order of size from top to bottom (i.e., each disk
 * sits on top of an even larger one).
 *
 * You have the following constraints:
 * (1) Only one disk can be moved at a time.
 * (2) A disk is slid off the top of one tower onto the next tower.
 * (3) A disk can only be placed on top of a larger disk.
 *
 * Write a program to move the disks from the first tower to the last using
 * stacks.
 *
 * Runtimes:
 *  - Recursion: O((2^n) - 1)
*/

const makeTower = (name, tower) => ({ name, tower });
const formatStep = (disk, { name: from }, { name: to }) => (
  `Disk ${disk} moved from tower ${from} to tower ${to}`
);

const moveTopDisk = ({ tower: from }, { tower: to }) => {
  const topDisk = from.pop();

  if (to.length && to[to.length - 1] <= topDisk) {
    throw new Error(`Invalid move: Disk ${topDisk} cannot be placed on ${to[to.length - 1]}`);
  }

  to.push(topDisk);
};

// eslint-disable-next-line import/prefer-default-export
export const hanoiRecursion = (N) => {
  if (N <= 0) return null;

  const towerA = makeTower('A', Array.from({ length: N }, (_, i) => N - i));
  const towerB = makeTower('B', []);
  const towerC = makeTower('C', []);

  const stepArray = [];
  const hanoi = (disk, from, to, other) => {
    if (disk > 0) {
      hanoi(disk - 1, from, other, to);

      stepArray.push(formatStep(disk, from, to));
      moveTopDisk(from, to);

      hanoi(disk - 1, other, to, from);
    }
  };

  hanoi(N, towerA, towerC, towerB);

  return {
    steps: stepArray,
    towers: [towerA, towerB, towerC],
  };
};
