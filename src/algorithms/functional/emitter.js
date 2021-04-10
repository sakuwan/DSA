/* === Emitter ===
 *
 * General pub / sub event emitter pattern, with the capability to release
 * subscriptions.
 *
 * Improvements would be simply using a map instead of a null-prototype object,
 * since that would allow Symbols and more as event keys, as well as simplify
 * the subscribing / releasing
*/

// eslint-disable-next-line import/prefer-default-export
export class Emitter {
  constructor() {
    this.events = Object.create(null);
  }

  subscribe(event, fn) {
    if (typeof event !== 'string' || typeof fn !== 'function') {
      const error = `(${typeof event}, ${typeof fn})`;

      throw new TypeError(
        `subscribe expects parameters typed (string, function), received ${error}`,
      );
    }

    const cbList = (event in this.events)
      ? this.events[event]
      : this.events[event] = [];

    cbList.push(fn);

    return {
      release: () => {
        const callbackIndex = cbList.indexOf(fn);
        return (callbackIndex >= 0) && cbList.splice(callbackIndex, 1);
      },
    };
  }

  emit(event, ...args) {
    if (typeof event !== 'string') {
      throw new TypeError(
        `emit expects parameters typed (string, ...args), received (${typeof event}, ...args)`,
      );
    }

    const cbList = (event in this.events) ? this.events[event] : null;
    if (cbList) {
      cbList.forEach((cb) => cb(...args));

      return true;
    }

    return false;
  }
}
