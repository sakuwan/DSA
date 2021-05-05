/* === Validate a binary search tree ===
 *
 * Given the root of a binary tree, determine if it is a valid binary search
 * tree (BST).
 *
 * A valid BST is defined as follows:
 * - The left subtree of a node contains only nodes with keys less than the
 *   node's key.
 * - The right subtree of a node contains only nodes with keys greater than the
 *   node's key.
 * - Both the left and right subtrees must also be binary search trees.
 *
 * Runtimes:
 *  Recursion: O(n)
*/

// eslint-disable-next-line import/prefer-default-export
export const validBSTRecursion = (BST) => {
  if (!BST) return false;

  const isValidBST = (root, min, max) => {
    if (!root) return true;
    if ((min && root.val <= min.val) || (max && root.val >= max.val)) return false;

    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
  };

  return isValidBST(BST, null, null);
};
