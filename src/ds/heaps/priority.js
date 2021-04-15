/* === Priority queue ===
 *
 * Priority queues are essentially min heaps, sorted by a key from a
 * [key, value] pair instead of a single value. Generally, this comes paired
 * with the ability to decrease and increase a key.
*/

import { BinaryHeap } from './binary';

// eslint-disable-next-line import/prefer-default-export
export class PriorityQueue extends BinaryHeap {
  constructor(collection = [], comparator = (a, b) => a[0] - b[0]) {
    super(collection, comparator);
  }
}
