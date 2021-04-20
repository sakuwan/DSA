/* === Stack of Boxes ===
 * You have a stack of n boxes, with their associated length, width and height.
 * The boxes cannot be rotated and can only be stacked on top of one another if
 * each box in the stack is strictly larger than the box above it in length,
 * width, and height. Implement a method to build the tallest stack possible,
 * where the height of a stack is the sum of the heights of each box.
 *
 * Runtimes:
 *  Recursion: O(n^2)
 *  Iteration: O(n^2)
*/

export const stackRecursion = (A) => {
  if (!A) return null;

  const { length } = A;
  if (length === 0) return 0;
  if (length === 1) return A[0].height;

  A.sort(({ length: a }, { length: b }) => b - a);

  const boxHeights = Array.from({ length }, () => 0);
  const stackBoxes = (base, offset) => {
    if (offset >= length) return 0;

    const nextBase = A[offset];
    if ((base === null) || (nextBase.length < base.length && nextBase.width < base.width)) {
      if (boxHeights[offset] === 0) {
        boxHeights[offset] = nextBase.height + stackBoxes(nextBase, offset + 1);
      }

      return Math.max(boxHeights[offset], stackBoxes(base, offset + 1));
    }

    return stackBoxes(base, offset + 1);
  };

  return stackBoxes(null, 0);
};

export const stackIteration = (A) => {
  if (!A) return null;

  const { length } = A;
  if (length === 0) return 0;
  if (length === 1) return A[0].height;

  A.sort(({ length: a }, { length: b }) => b - a);

  const dp = Array.from({ length }, () => 0);
  for (let i = 0; i < length; i += 1) {
    const { length: topLength, width: topWidth, height: topHeight } = A[i];

    for (let j = 0; j < i; j += 1) {
      const { length: baseLength, width: baseWidth } = A[j];

      if (topLength < baseLength && topWidth < baseWidth) {
        dp[i] = Math.max(dp[i], dp[j]);
      }
    }

    dp[i] += topHeight;
  }

  return Math.max(...dp);
};
