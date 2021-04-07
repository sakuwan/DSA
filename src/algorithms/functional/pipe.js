/* === Pipe ===
 *
 * Given a sequence of n functions, process left-to-right each function in
 * sequence giving the output of the prior function as the input to the next
 * in sequence
*/

// eslint-disable-next-line import/prefer-default-export
export const pipe = (...fns) => (arg) => fns.reduce((acc, fn) => fn(acc), arg);
