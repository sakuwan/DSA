/* === Merge N linked lists ===
 *
 * You are given an array of N linked-lists lists, each linked-list is sorted
 * in ascending order. Merge all the linked-lists into one sorted linked-list
 * and return it.
 *
 * Runtimes:
 *  Multiple recursion merge: O(nm)
*/

import { mergeListRecursion } from './listmerge';

/* eslint-disable import/prefer-default-export, no-param-reassign */
export const mergeNListsRecursion = (A) => {
  if (!A || !A.length) return null;

  while (A.length > 1) {
    const listA = A.shift();
    const listB = A.shift();

    A.push(mergeListRecursion(listA, listB));
  }

  return A[0];
};
/* eslint-enable import/prefer-default-export, no-param-reassign */
