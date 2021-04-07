/* === Compose ===
 *
 * Given a sequence of n functions, process right-to-left each function in
 * sequence giving the output of the prior function as the input to the next
 * in sequence
*/

// eslint-disable-next-line import/prefer-default-export
export const compose = (...fns) => (arg) => fns.reduceRight((acc, fn) => fn(acc), arg);
