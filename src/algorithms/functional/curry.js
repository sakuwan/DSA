/* === Curry ===
 *
 * A textbook definition of currying is the technique of converting a function
 * that takes multiple arguments into a sequence of functions that each take a
 * single argument. However, most JS implementations do not exactly adhere to
 * the single argument aspect, allowing sequential functions that each take
 * one or more arguments until reaching the desired arity.
 *
 * Currying is related to partial application, but the two are very different.
 *
 * This implementation of currying is efficient, though it does have some
 * downsides that can be dealt with at the cost of speed. A function's name and
 * length are lost due to rest arguments having a default length of 0, and the
 * function name is also lost through the anonymous function creation. Both of
 * these issues can be fixed with defineProperty -- as functions are objects --
 * of both the arity and the original function name
*/

export const curryN = (arity, fn) => {
  const curried = (priorArgs) => (...newArgs) => {
    const currentArgs = [...priorArgs, ...newArgs];

    return currentArgs.length < arity
      ? curried(currentArgs)
      : fn(...currentArgs);
  };

  return curried([]);
};

export const curry = (fn) => curryN(fn.length, fn);
