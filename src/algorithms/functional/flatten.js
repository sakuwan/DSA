/* === Flatten ===
 *
 * Flattening an array means reducing the dimensionality, e.g. the following
 * array [a, [b, [c]]] is multidimensional to a depth of 2: c is nested in the
 * array containing b, and that array is itself nested in the array containing
 * a. To flatten is to merge the contents of a subarray with the array that
 * contains it, effectively flattening the depth:
 *
 * [a, [b, [c]]] -> depth 0
 * [a, b, [c]]   -> depth 1
 * [a, b, c]     -> depth 2
*/

// Built-in flattening, ES6+
// Supports flattening to a specified depth, or recursively with Infinity
export const flattenA = (xs) => xs.flat();

// Standard single dimension flatten
export const flattenB = (xs) => [].concat(...xs);

// Standard multidimensional flatten, reduce recursion
export const flattenC = (xs) => xs.reduce((acc, ys) => (
  acc.concat(Array.isArray(ys) ? flattenC(ys) : ys)
), []);

/* === Functional approach: Closure-style transducers === */

// Naive transducer: map & fold
const mapFold = (map, fold) => (acc, x) => fold(acc, map(x));

// Transducer component: reduce / fold
const concat = (xs, ys) => xs.concat(ys);

// Naive transducer, not a true transducer but the concept is similar
// Flattening an array is not truly an apt situation for transducers, though
// it is better than multiple iteration on large arrays
export const flattenD = (xs) => (
  xs.reduce(mapFold((x) => (Array.isArray(x) ? flattenD(x) : x), concat), [])
);
