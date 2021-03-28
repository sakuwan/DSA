import * as Stairs from '../../../src/dp/stairs';
import * as Robot from '../../../src/dp/robot';

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
    const { stairsMemoized } = Stairs;
    expect(typeof stairsMemoized).toBe('function');

    const memoizedResults = Array.from(
      { length: 11 }, (_, i) => stairsMemoized(i),
    );

    expect(memoizedResults).toEqual([
      1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274,
    ]);

    // Bottom-up DP, iterative memoization
    const { stairsIterative } = Stairs;
    expect(typeof stairsIterative).toBe('function');

    const iterativeResults = Array.from(
      { length: 11 }, (_, i) => stairsIterative(i),
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
    const { robotMemoized } = Robot;
    expect(typeof robotMemoized).toBe('function');

    {
      const resultA = robotMemoized(testMazeA); // Valid
      expect(resultA).not.toBe(null);

      const resultB = robotMemoized(testMazeB); // Valid
      expect(resultB).not.toBe(null);

      const resultC = robotMemoized(testMazeC); // Valid
      expect(resultC).not.toBe(null);

      const resultD = robotMemoized(testMazeD); // Valid
      expect(resultD).not.toBe(null);

      const resultE = robotMemoized(testMazeE); // Invalid
      expect(resultE).toBe(null);

      const resultF = robotMemoized(testMazeF); // Invalid
      expect(resultF).toBe(null);

      const resultG = robotMemoized(testMazeG); // Invalid
      expect(resultG).toBe(null);
    }
  });
});
