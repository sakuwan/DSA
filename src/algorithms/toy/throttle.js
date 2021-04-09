/* === Throttle ===
 *
 * Throttle execution of a function, effectively rate-limiting by a provided
 * delay. Useful for events that fire frequently: pointer, scroll, and resize.
 *
 * Some variations exist for throttling, such as trailing calls and similar
 * functionality to debouncing, or the extended functionality to cancel
*/

// eslint-disable-next-line import/prefer-default-export
export const throttle = (fn, delay) => {
  let isThrottled = false;

  return (...args) => {
    if (isThrottled) return undefined;

    isThrottled = true;
    setTimeout(() => { isThrottled = false; }, delay);

    return fn(...args);
  };
};
