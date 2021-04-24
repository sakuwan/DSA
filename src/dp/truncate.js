/* === Truncate string ===
 *
 * A sentence is a list of words that are separated by a single space with no
 * leading or trailing spaces. Each of the words consists of only uppercase and
 * lowercase English letters (no punctuation). For example, "Hello World",
 * "HELLO", and "hello world hello world" are all sentences.
 *
 * You are given a sentence A and an integer N. You want to truncate A such
 * that it contains only the first N words, return A after truncating it.
 *
 * Runtimes:
 *  Functional: O(n)
*/

// eslint-disable-next-line import/prefer-default-export
export const truncateFunctional = (A, N) => (A && N) && A.split(' ').slice(0, N).join(' ');
