/* === Merge two sorted lists ===
 *
 * Merge two sorted linked lists and return it as a sorted list. The list
 * should be made by splicing together the nodes of the first two lists.
 *
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val);
 *   this.next = (next===undefined ? null : next);
 * }
 *
 * Runtimes:
 *  Recursion: O(n + m)
*/

/* eslint-disable import/prefer-default-export, no-param-reassign */
export const mergeListRecursion = (A, B) => {
  if (!A || !B) return A || B;

  if (A.val < B.val) {
    A.next = mergeListRecursion(A.next, B);
    return A;
  }

  B.next = mergeListRecursion(A, B.next);
  return B;
};
/* eslint-enable import/prefer-default-export, no-param-reassign */
