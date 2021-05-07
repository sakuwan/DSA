/* === Lowest common ancestor ===
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given
 * nodes in the tree.
 *
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor
 * is defined between two nodes P and Q as the lowest node in T that has both P
 * and Q as descendants (where we allow a node to be a descendant of itself).”
 *
 * Runtimes:
 *  - Recursion: O(n)
*/

// eslint-disable-next-line import/prefer-default-export
export const lcaRecursion = (T, P, Q) => {
  if (!T || P === T || Q === T) return T;

  const left = lcaRecursion(T.left, P, Q);
  const right = lcaRecursion(T.right, P, Q);

  return (left && right) ? T : (left || right);
};
