/* === Partial application ===
 *
 * A textbook definition of partial application, or partial function
 * application, refers to the process of fixing a number of arguments to a
 * function, producing another function of smaller arity. Currying, a closely
 * related concept, can be implemented via partial application. In this
 * implementation, certain parameters can be skipped if provided a certain
 * Symbol, resulting in a function that will take in the missing arguments and
 * call the original function once meeting the provided arity
*/

export const __ = Symbol('@@placeholder'); // eslint-disable-line no-underscore-dangle

export const partialize = (arity, priorArgs, fn) => (...newArgs) => {
  let argsLeft = arity;

  const currentArgs = [];
  for (let i = 0; (i < priorArgs.length || newArgs.length > 0) && argsLeft > 0; i += 1) {
    const priorValue = (i < priorArgs.length) ? priorArgs[i] : __;
    const isBound = priorValue !== __;

    const nextArg = (isBound || newArgs.length === 0)
      ? priorValue
      : newArgs.shift();

    if (nextArg !== __) argsLeft -= 1;

    currentArgs.push(nextArg);
  }

  return argsLeft === 0
    ? fn(...currentArgs)
    : partialize(arity, currentArgs, fn);
};

export const partial = (fn) => partialize(fn.length, [], fn);
