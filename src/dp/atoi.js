/* === atoi / string to integer ===
 *
 * Implement the atoi function, which converts a string to a 32-bit signed
 * integer (similar to C/C++'s atoi function).
 *
 * The algorithm for atoi(string s) is as follows:
 *  - Read in and ignore any leading whitespace.
 *
 *  - Check if the next character (if not already at the end of the string)
 *    is '-' or '+'. Read this character in if it is either. This determines
 *    if the final result is negative or positive respectively. Assume the
 *    result is positive if neither is present.
 *
 *  - Read in next the characters until the next non-digit charcter or the end
 *    of the input is reached. The rest of the string is ignored.
 *
 *  - Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32).
 *    If no digits were read, then the integer is 0. Change the sign as
 *    necessary (from step 2).
 *
 *  - If the integer is out of the 32-bit signed integer range
 *    [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range.
 *    Specifically, integers less than -2^31 should be clamped to -2^31, and
 *    integers greater than 2^31 - 1 should be clamped to 2^31 - 1.
 *
 *  - Return the integer as the final result.
 *
 * Note:
 *  - Only the space character ' ' is considered a whitespace character.
 *  - Do not ignore any characters other than the leading whitespace or the
 *    rest of the string after the digits.
 *
 * Runtimes:
 *  Iteration: O(n)
 *  Functional: O(n)
*/

// eslint-disable-next-line import/prefer-default-export
export const atoiIteration = (S) => {
  if (!S) return NaN;

  const MIN_INT = 2 ** 31;
  const MAX_INT = 2 ** 31 - 1;
  const CHAR_OFFSET = String('0').charCodeAt(0);

  const isSign = (ch) => ch === '+' || ch === '-';
  const isDigit = (ch) => ch >= '0' && ch <= '9';

  const { length } = S;

  let digitOffset = 0;
  while (digitOffset < length && S[digitOffset] === ' ') digitOffset += 1;

  if (!isSign(S[digitOffset]) && !isDigit(S[digitOffset])) return 0;

  const isNegative = S[digitOffset] === '-';
  if (isSign(S[digitOffset])) digitOffset += 1;

  let accumulator = 0;
  while (digitOffset < length && isDigit(S[digitOffset])) {
    const currentDigit = S[digitOffset].charCodeAt(0) - CHAR_OFFSET;

    accumulator = (accumulator * 10) + currentDigit;
    if (accumulator >= MAX_INT && !isNegative) {
      accumulator = MAX_INT;
      break;
    }

    if (accumulator >= MIN_INT) {
      accumulator = MIN_INT;
      break;
    }

    digitOffset += 1;
  }

  return isNegative ? -accumulator : accumulator;
};

export const atoiFunctional = (S) => {
  if (!S) return NaN;

  const MIN_INT = -(2 ** 31);
  const MAX_INT = 2 ** 31 - 1;

  const formattedString = S.match(/^\s*([+-]?\d+)/);
  if (formattedString === null) return NaN;

  return Math.min(Math.max(+formattedString[1], MIN_INT), MAX_INT);
};
