/* === Debounce ===
 *
 * Debounce execution of a function, invoking the function strictly once at the
 * beginning or the end of a series of calls.
*/

// eslint-disable-next-line import/prefer-default-export
export const debounce = (fn, delay) => {
  let timeoutId = null;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};
