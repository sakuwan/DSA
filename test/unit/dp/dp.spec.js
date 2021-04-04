import * as Stairs from '../../../src/dp/stairs';
import * as Robot from '../../../src/dp/robot';
import * as MagicIndex from '../../../src/dp/magicindex';
import * as PowerSet from '../../../src/dp/powerset';
import * as Median from '../../../src/dp/median';
import * as Hanoi from '../../../src/dp/hanoi';
import * as MaxSubarray from '../../../src/dp/maximum';
import * as FirstUnique from '../../../src/dp/firstunique';
import * as FourSum from '../../../src/dp/foursum';
import * as FizzBuzz from '../../../src/dp/fizzbuzz';
import * as EditDistance from '../../../src/dp/editdistance';
import * as Palindromic from '../../../src/dp/palindromic';

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

  it('Correctly solves the problem: Maximum sum subarray', () => {
    // [1, 1, 1, -1, -1, 3] is the longest subsequence, sum of 4
    const testArrayA = [2, -3, 1, 1, 1, -1, -1, 3, -1, 0];

    // [1] is the longest subsequence, sum of 1
    const testArrayB = [1];

    // Empty array
    const testArrayC = [];

    // Maximum sum subarray, iterative
    const { maxSubarray } = MaxSubarray;
    expect(typeof maxSubarray).toBe('function');

    const resultA = maxSubarray(testArrayA);
    expect(resultA.value).toBe(4);
    expect(resultA.indices).toStrictEqual([2, 7]);

    const resultB = maxSubarray(testArrayB);
    expect(resultB.value).toBe(1);
    expect(resultB.indices).toStrictEqual([0, 0]);

    const resultC = maxSubarray(testArrayC);
    expect(resultC).toBe(null);
  });

  it('Correctly solves the problem: First unique character in a string', () => {
    // Palindrome, g is unique
    const testStringA = 'abcdefgfedcba';

    // Final character is unique, g
    const testStringB = 'aabbccddeeffg';

    // First character is unique, a
    const testStringC = 'abbccddeeffgg';

    // No unique characters
    const testStringD = 'aabbccddeeffgg';

    // Empty string
    const testStringE = '';

    // First unique character, iterative
    const { firstUniqueIteration } = FirstUnique;
    expect(typeof firstUniqueIteration).toBe('function');

    {
      const resultA = firstUniqueIteration(testStringA); // Index 6
      expect(resultA).toBe(6);

      const resultB = firstUniqueIteration(testStringB); // Index 12
      expect(resultB).toBe(12);

      const resultC = firstUniqueIteration(testStringC); // Index 0
      expect(resultC).toBe(0);

      const resultD = firstUniqueIteration(testStringD); // Index -1
      expect(resultD).toBe(-1);

      const resultE = firstUniqueIteration(testStringE); // Index -1
      expect(resultE).toBe(-1);
    }

    // First unique character, functional
    const { firstUniqueFunctional } = FirstUnique;
    expect(typeof firstUniqueFunctional).toBe('function');

    {
      const resultA = firstUniqueIteration(testStringA); // Index 6
      expect(resultA).toBe(6);

      const resultB = firstUniqueIteration(testStringB); // Index 12
      expect(resultB).toBe(12);

      const resultC = firstUniqueIteration(testStringC); // Index 0
      expect(resultC).toBe(0);

      const resultD = firstUniqueIteration(testStringD); // Index -1
      expect(resultD).toBe(-1);

      const resultE = firstUniqueIteration(testStringE); // Index -1
      expect(resultE).toBe(-1);
    }
  });

  it('Correctly solves the problem: Four sum', () => {
    // 2 valid tuples
    const testArraysetA = [[1, 2], [-2, -1], [-1, 2], [0, 2]];

    // 6 valid tuples
    const testArraysetB = [[1, -1], [1, -1], [-1, 1], [1, -1]];

    // No valid tuples
    const testArraysetC = [[1, 2], [3, 4], [5, 6], [7, 8]];

    // Four sum, iterative
    const { fourSumIteration } = FourSum;
    expect(typeof fourSumIteration).toBe('function');

    {
      const resultA = fourSumIteration(...testArraysetA); // 2 valid
      expect(resultA).toBe(2);

      const resultB = fourSumIteration(...testArraysetB); // 2 valid
      expect(resultB).toBe(6);

      const resultC = fourSumIteration(...testArraysetC); // 0 valid
      expect(resultC).toBe(0);
    }

    // Four sum, memoized
    const { fourSumMemoization } = FourSum;
    expect(typeof fourSumMemoization).toBe('function');

    {
      const resultA = fourSumMemoization(...testArraysetA); // 2 valid
      expect(resultA).toBe(2);

      const resultB = fourSumMemoization(...testArraysetB); // 2 valid
      expect(resultB).toBe(6);

      const resultC = fourSumMemoization(...testArraysetC); // 0 valid
      expect(resultC).toBe(0);
    }
  });

  it('Correctly solves the problem: FizzBuzz', () => {
    // FizzBuzz, iterative
    const { fizzBuzzIteration } = FizzBuzz;
    expect(typeof fizzBuzzIteration).toBe('function');

    // The single test of N = 100
    const result = fizzBuzzIteration(100);
    expect(result.length).toBe(100); // 100 entries

    expect(result[0]).toBe('1'); // 1
    expect(result[2]).toBe('Fizz'); // 3
    expect(result[4]).toBe('Buzz'); // 5
    expect(result[14]).toBe('FizzBuzz'); // 15
  });

  it('Correctly solves the problem: Edit distance', () => {
    // 3 substitutions, 1 insertion, 1 deletion = 8
    const testStringsA = ['intention', 'execution'];

    // 1 insertion = 1
    const testStringsB = ['apple', 'aple'];

    // 1 deletion = 1
    const testStringsC = ['apple', 'appple'];

    // 1 substitution = 2
    const testStringsD = ['apple', 'appli'];

    // Full replacement, 5 insertions = 5
    const testStringsE = ['apple', ''];

    // Error, both values not strings = -1
    const testStringsF = ['apple', null];

    // Edit distance, recursive
    const { editDistanceRecursion } = EditDistance;
    expect(typeof editDistanceRecursion).toBe('function');

    {
      const resultA = editDistanceRecursion(...testStringsA); // 8
      expect(resultA).toBe(8);

      const resultB = editDistanceRecursion(...testStringsB); // 1
      expect(resultB).toBe(1);

      const resultC = editDistanceRecursion(...testStringsC); // 1
      expect(resultC).toBe(1);

      const resultD = editDistanceRecursion(...testStringsD); // 2
      expect(resultD).toBe(2);

      const resultE = editDistanceRecursion(...testStringsE); // 5
      expect(resultE).toBe(5);

      const resultF = editDistanceRecursion(...testStringsF); // -1
      expect(resultF).toBe(-1);
    }

    // Edit distance, iterative
    const { editDistanceIteration } = EditDistance;
    expect(typeof editDistanceIteration).toBe('function');

    {
      const resultA = editDistanceIteration(...testStringsA); // 8
      expect(resultA).toBe(8);

      const resultB = editDistanceIteration(...testStringsB); // 1
      expect(resultB).toBe(1);

      const resultC = editDistanceIteration(...testStringsC); // 1
      expect(resultC).toBe(1);

      const resultD = editDistanceIteration(...testStringsD); // 2
      expect(resultD).toBe(2);

      const resultE = editDistanceIteration(...testStringsE); // 5
      expect(resultE).toBe(5);

      const resultF = editDistanceIteration(...testStringsF); // -1
      expect(resultF).toBe(-1);
    }
  });

  it('Correctly solves the problem: Longest palindromic subsequence', () => {
    // 7 length palindrome
    const testStringA = 'racecar';

    // 7 length palindromic subsequence = 'bababab'
    const testStringB = 'babbabab';

    // 1 length palindrome, all unique
    const testStringC = 'abcdefg';

    // 2 length palindrome, repeated
    const testStringD = 'aa';

    // Invalid palindrome, empty or null string
    const testStringE = '';

    // Longest palindromic subsequence, recursive
    const { palindromicRecursion } = Palindromic;
    expect(typeof palindromicRecursion).toBe('function');

    {
      const resultA = palindromicRecursion(testStringA); // 7
      expect(resultA).toBe(7);

      const resultB = palindromicRecursion(testStringB); // 7
      expect(resultB).toBe(7);

      const resultC = palindromicRecursion(testStringC); // 1
      expect(resultC).toBe(1);

      const resultD = palindromicRecursion(testStringD); // 2
      expect(resultD).toBe(2);

      const resultE = palindromicRecursion(testStringE); // 0
      expect(resultE).toBe(0);
    }

    // Longest palindromic subsequence, memoized recursion
    const { palindromicMemoization } = Palindromic;
    expect(typeof palindromicMemoization).toBe('function');

    {
      const resultA = palindromicMemoization(testStringA); // 7
      expect(resultA).toBe(7);

      const resultB = palindromicMemoization(testStringB); // 7
      expect(resultB).toBe(7);

      const resultC = palindromicMemoization(testStringC); // 1
      expect(resultC).toBe(1);

      const resultD = palindromicMemoization(testStringD); // 2
      expect(resultD).toBe(2);

      const resultE = palindromicMemoization(testStringE); // 0
      expect(resultE).toBe(0);
    }

    // Longest palindromic subsequence, iterative
    const { palindromicIteration } = Palindromic;
    expect(typeof palindromicIteration).toBe('function');

    {
      const resultA = palindromicIteration(testStringA); // 7
      expect(resultA).toBe(7);

      const resultB = palindromicIteration(testStringB); // 7
      expect(resultB).toBe(7);

      const resultC = palindromicIteration(testStringC); // 1
      expect(resultC).toBe(1);

      const resultD = palindromicIteration(testStringD); // 2
      expect(resultD).toBe(2);

      const resultE = palindromicIteration(testStringE); // 0
      expect(resultE).toBe(0);
    }
  });
});
