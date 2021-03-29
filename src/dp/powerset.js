/* === Power set ===
 *
 * Write a method to return all subsets of a set.
 *
 * Runtimes:
 *  - Recursion:  O(n 2^n)
 *  - Iteration:  O(n 2^n)
 *  - Functional: O(n 2^n)
*/

export const powerRecursion = (A) => {
  if (!A || !A.length) return [[]];

  const powerSet = [];
  const makeSubsets = (set = [], current = 0) => {
    powerSet.push(set);

    for (let i = current; i < A.length; i += 1) {
      makeSubsets([...set, A[i]], i + 1);
    }
  };

  makeSubsets();

  return powerSet;
};

export const powerIteration = (A) => {
  if (!A || !A.length) return [[]];

  const powerSet = [[]];
  for (let i = 0; i < A.length; i += 1) {
    powerSet.push(...powerSet.map((set) => [...set, A[i]]));
  }

  return powerSet;
};

export const powerFunctional = (A) => {
  if (!A || !A.length) return [[]];

  return A.reduce((a, c) => [...a, ...a.map((set) => [...set, c])], [[]]);
};
