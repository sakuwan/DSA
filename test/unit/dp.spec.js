import * as Stairs from '../../src/dp/stairs';

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
});
