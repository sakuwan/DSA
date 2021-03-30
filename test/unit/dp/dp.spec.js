import * as Stairs from '../../../src/dp/stairs';
import * as Robot from '../../../src/dp/robot';
import * as MagicIndex from '../../../src/dp/magicindex';
import * as PowerSet from '../../../src/dp/powerset';
import * as Median from '../../../src/dp/median';
import * as Hanoi from '../../../src/dp/hanoi';

describe('DP general challenges', () => {
  it('Correctly solves the problem: Stairs', () => {
    // Recursion, no memoization
    const { stairsRecursion } = Stairs;
    expect(typeof stairsRecursion).toBe('function');

    const recursionResults = Array.from(
      { length: 11 }, (_, i) => stairsRecursion(i),
    );

    expect(recursionResults).toEqual([
      1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274,
    ]);

    // DP, recursion with memoization
    const { stairsMemoization } = Stairs;
    expect(typeof stairsMemoization).toBe('function');

    const memoizedResults = Array.from(
      { length: 11 }, (_, i) => stairsMemoization(i),
    );

    expect(memoizedResults).toEqual([
      1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274,
    ]);

    // Bottom-up DP, iterative memoization
    const { stairsIteration } = Stairs;
    expect(typeof stairsIteration).toBe('function');

    const iterativeResults = Array.from(
      { length: 11 }, (_, i) => stairsIteration(i),
    );

    expect(iterativeResults).toEqual([
      1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274,
    ]);
  });

  it('Correctly solves the problem: Robot', () => {
    // All valid paths
    const testMazeA = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];

    // Valid path along left and bottom
    const testMazeB = [
      [1, 0, 1, 1, 1],
      [1, 0, 0, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ];

    // Valid path, straight down
    const testMazeC = [
      [1],
      [1],
      [1],
      [1],
      [1],
    ];

    // Valid path, straight right
    const testMazeD = [
      [1, 1, 1, 1, 1],
    ];

    // Invalid maze, unreachable start and end
    const testMazeE = [
      [0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0],
    ];

    // Invalid path, robot cannot travel upwards
    const testMazeF = [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 0, 1],
    ];

    // Invalid path, empty
    const testMazeG = [];

    // Recursion, no memoization
    const { robotRecursion } = Robot;
    expect(typeof robotRecursion).toBe('function');

    {
      const resultA = robotRecursion(testMazeA); // Valid
      expect(resultA).not.toBe(null);

      const resultB = robotRecursion(testMazeB); // Valid
      expect(resultB).not.toBe(null);

      const resultC = robotRecursion(testMazeC); // Valid
      expect(resultC).not.toBe(null);

      const resultD = robotRecursion(testMazeD); // Valid
      expect(resultD).not.toBe(null);

      const resultE = robotRecursion(testMazeE); // Invalid
      expect(resultE).toBe(null);

      const resultF = robotRecursion(testMazeF); // Invalid
      expect(resultF).toBe(null);

      const resultG = robotRecursion(testMazeG); // Invalid
      expect(resultG).toBe(null);
    }

    // DP, recursion with memoization
    const { robotMemoization } = Robot;
    expect(typeof robotMemoization).toBe('function');

    {
      const resultA = robotMemoization(testMazeA); // Valid
      expect(resultA).not.toBe(null);

      const resultB = robotMemoization(testMazeB); // Valid
      expect(resultB).not.toBe(null);

      const resultC = robotMemoization(testMazeC); // Valid
      expect(resultC).not.toBe(null);

      const resultD = robotMemoization(testMazeD); // Valid
      expect(resultD).not.toBe(null);

      const resultE = robotMemoization(testMazeE); // Invalid
      expect(resultE).toBe(null);

      const resultF = robotMemoization(testMazeF); // Invalid
      expect(resultF).toBe(null);

      const resultG = robotMemoization(testMazeG); // Invalid
      expect(resultG).toBe(null);
    }
  });

  it('Correctly solves the problem: Magic index', () => {
    // A[4] === 4
    const testArrayA = [1, 2, 3, 4, 4, 5, 6, 8, 10];

    // A[5] === 5
    const testArrayB = [-5, -3, -1, 1, 3, 5, 7, 9, 11];

    // A[10] === 10
    const testArrayC = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

    // No match
    const testArrayD = [-7, 5, 11, 13, 15, 18, 21, 100];

    // No match
    const testArrayE = [-1, 0, 1];

    // No match
    const testArrayF = [];

    // Iterative, naive
    const { magicIteration } = MagicIndex;
    expect(typeof magicIteration).toBe('function');

    {
      const resultA = magicIteration(testArrayA); // Valid
      expect(resultA).toBe(4);

      const resultB = magicIteration(testArrayB); // Valid
      expect(resultB).toBe(5);

      const resultC = magicIteration(testArrayC); // Valid
      expect(resultC).toBe(10);

      const resultD = magicIteration(testArrayD); // Invalid
      expect(resultD).toBe(-1);

      const resultE = magicIteration(testArrayE); // Invalid
      expect(resultE).toBe(-1);

      const resultF = magicIteration(testArrayF); // Invalid
      expect(resultF).toBe(-1);
    }

    // Recursion, binary search
    const { magicRecursion } = MagicIndex;
    expect(typeof magicRecursion).toBe('function');

    {
      const resultA = magicRecursion(testArrayA); // Valid
      expect(resultA).toBe(4);

      const resultB = magicRecursion(testArrayB); // Valid
      expect(resultB).toBe(5);

      const resultC = magicRecursion(testArrayC); // Valid
      expect(resultC).toBe(10);

      const resultD = magicRecursion(testArrayD); // Invalid
      expect(resultD).toBe(-1);

      const resultE = magicRecursion(testArrayE); // Invalid
      expect(resultE).toBe(-1);

      const resultF = magicRecursion(testArrayF); // Invalid
      expect(resultF).toBe(-1);
    }
  });

  it('Correctly solves the problem: Power set', () => {
    // Empty set
    const testArrayA = [];

    // 2 set
    const testArrayB = [1];

    // 4 set
    const testArrayC = [1, 2];

    // 8 set
    const testArrayD = [1, 2, 3];

    // Recursive set building
    const { powerRecursion } = PowerSet;
    expect(typeof powerRecursion).toBe('function');

    {
      const resultA = powerRecursion(testArrayA); // length: 1
      expect(resultA).toEqual([[]]);

      const resultB = powerRecursion(testArrayB); // length: 2
      expect(resultB).toEqual([[], [1]]);

      const resultC = powerRecursion(testArrayC); // length: 4
      expect(resultC).toEqual([[], [1], [1, 2], [2]]);

      const resultD = powerRecursion(testArrayD); // length: 8
      expect(resultD).toEqual([[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]);
    }

    // Iterative set building
    const { powerIteration } = PowerSet;
    expect(typeof powerIteration).toBe('function');

    {
      const resultA = powerIteration(testArrayA); // length: 1
      expect(resultA).toEqual([[]]);

      const resultB = powerIteration(testArrayB); // length: 2
      expect(resultB).toEqual([[], [1]]);

      const resultC = powerIteration(testArrayC); // length: 4
      expect(resultC).toEqual([[], [1], [2], [1, 2]]);

      const resultD = powerIteration(testArrayD); // length: 8
      expect(resultD).toEqual(
        [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
      );
    }

    // Functional iterative set building
    const { powerFunctional } = PowerSet;
    expect(typeof powerFunctional).toBe('function');

    {
      const resultA = powerFunctional(testArrayA); // length: 1
      expect(resultA).toEqual([[]]);

      const resultB = powerFunctional(testArrayB); // length: 2
      expect(resultB).toEqual([[], [1]]);

      const resultC = powerFunctional(testArrayC); // length: 4
      expect(resultC).toEqual([[], [1], [2], [1, 2]]);

      const resultD = powerFunctional(testArrayD); // length: 8
      expect(resultD).toEqual(
        [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
      );
    }
  });

  it('Correctly solves the problem: Median', () => {
    // [1, 2, 3, 4, 5, 6] -> 3.5
    const testArrayA = [[1, 2, 3], [4, 5, 6]];

    // [-5, 0, 5, 10, 15, 20] -> 7.5
    const testArrayB = [[-5, 15, 20], [0, 5, 10]];

    // [0, 0, 1, 2] -> 0.5
    const testArrayC = [[0, 1, 2], [0]];

    // [1, 2, 3, 4] -> 2.5
    const testArrayD = [[1, 2], [3, 4]];

    // [0, 0] -> 0
    const testArrayE = [[0], [0]];

    // [] -> null
    const testArrayF = [[], []];

    // Median of sorted arrays, merging
    const { medianMerge } = Median;
    expect(typeof medianMerge).toBe('function');

    {
      const resultA = medianMerge(...testArrayA); // 3.5
      expect(resultA).toBe(3.5);

      const resultB = medianMerge(...testArrayB); // 7.5
      expect(resultB).toBe(7.5);

      const resultC = medianMerge(...testArrayC); // 0.5
      expect(resultC).toBe(0.5);

      const resultD = medianMerge(...testArrayD); // 2.5
      expect(resultD).toBe(2.5);

      const resultE = medianMerge(...testArrayE); // 0
      expect(resultE).toBe(0);

      const resultF = medianMerge(...testArrayF); // null
      expect(resultF).toBe(null);
    }

    // Median of sorted arrays, iterative
    const { medianIteration } = Median;
    expect(typeof medianIteration).toBe('function');

    {
      const resultA = medianIteration(...testArrayA); // 3.5
      expect(resultA).toBe(3.5);

      const resultB = medianIteration(...testArrayB); // 7.5
      expect(resultB).toBe(7.5);

      const resultC = medianIteration(...testArrayC); // 0.5
      expect(resultC).toBe(0.5);

      const resultD = medianIteration(...testArrayD); // 2.5
      expect(resultD).toBe(2.5);

      const resultE = medianIteration(...testArrayE); // 0
      expect(resultE).toBe(0);

      const resultF = medianIteration(...testArrayF); // null
      expect(resultF).toBe(null);
    }
  });

  it('Correctly solves the problem: Towers of Hanoi', () => {
    // Towers of Hanoi, recursive
    const { hanoiRecursion } = Hanoi;
    expect(typeof hanoiRecursion).toBe('function');

    const invalidResult = hanoiRecursion(0);
    expect(invalidResult).toBe(null);

    const resultA = hanoiRecursion(1); // 1 step
    expect(resultA.steps.length).toBe(1);

    const resultB = hanoiRecursion(2); // 3 step
    expect(resultB.steps.length).toBe(3);

    const resultC = hanoiRecursion(3); // 7 step
    expect(resultC.steps.length).toBe(7);

    const resultD = hanoiRecursion(4); // 15 step
    expect(resultD.steps.length).toBe(15);
  });
});
