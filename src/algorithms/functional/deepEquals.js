/* === Deep equal ===
 *
 * Deep equality recursively walks through the properties of all objects, until
 * all primitive components or strict equality comparisons are satisified.
*/

// NaN & +0/-0 equality
const is = ('is' in Object) ? Object.is : (lhs, rhs) => (
  (lhs === rhs)
    ? (lhs !== 0 || 1 / lhs !== 1 / rhs)
    : (lhs !== lhs && rhs !== rhs) // eslint-disable-line no-self-compare
);

// Object.keys reference
const { keys } = Object;

// eslint-disable-next-line import/prefer-default-export
export const deepEquals = (lhs, rhs) => {
  // Cyclic reference checking, default cycles to equality
  const occurrences = new Map();

  // Equality checking, closured for cyclic reference checking
  const equals = (a, b) => {
    // Strict, NaN, and +0/-0 equality
    if (is(a, b)) return true;

    // Should always be objects by this point: primitives were checked by 'is'
    if (a !== Object(a) || b !== Object(b)) return false;

    // Check for cyclic references, return true for self or other cycles
    if (occurrences.has(a) && occurrences.get(a) === b) return true;
    occurrences.set(a, b);

    // Constructor equality, should prune any non-identical instance types
    if (a.constructor !== b.constructor) return false;

    // Special cases for Map and Set, only check a due to prior inference
    if (a instanceof Map || a instanceof Set) {
      // Early out if sizes are different
      if (a.size !== b.size) return false;

      // Simplicity: Objects being valid as keys complicates deep equality, so
      // just handle them as sorted arrays, as insertion order doesn't exactly
      // matter in the realm of equality
      const entriesA = Array.from(a).sort();
      const entriesB = Array.from(b).sort();

      return equals(entriesA, entriesB);
    }

    // Special case: Compare against the millisecond value
    if (a instanceof Date) return a.valueOf() === b.valueOf();

    // Special case: Compare the source text and set flags
    if (a instanceof RegExp) return a.source === b.source && a.flags === b.flags;

    // Fetch the property keys of a, and the length of the keys of b
    const keysA = keys(a);
    const { length } = keys(b);

    // Early out if the lengths are different
    if (keysA.length !== length) return false;

    // Check equality of all properties
    return keysA.every((prop) => equals(a[prop], b[prop]));
  };

  // Start the recursion on the base objects
  return equals(lhs, rhs);
};
