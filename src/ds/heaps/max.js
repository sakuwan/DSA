/* === Max heap ===
 *
 * Max heaps are ordered in reverse compared to min heaps, their comparator is
 * flipped. Outside of this simple change, there is no difference in the
 * implementation and max heaps offer the maxima instead of the minima.
*/

import { BinaryHeap } from './binary';

// eslint-disable-next-line import/prefer-default-export
export class MaxHeap extends BinaryHeap {
  constructor(collection = [], comparator = (a, b) => b - a) {
    super(collection, comparator);
  }
}
