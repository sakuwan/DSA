/* === Binary heap ===
 *
 * A binary heap is representation of a heap data structure in the form of a
 * binary tree, commonly used for priority queues. Binary heaps satisfy two
 * conditions: they must be complete or a single entry away from being complete
 * and they satisfy a comparator, generally being greater than or less than the
 * node's children.
 *
 * Runtimes:
 *  - min:    O(1)
 *  - insert: O(log n)
 *  - remove: O(log n)
 *  - length: O(1)
*/

const parentNode = (index) => Math.floor((index + 1) / 2) - 1;

const leftNode = (index) => 2 * index + 1;
const rightNode = (index) => 2 * index + 2;

// eslint-disable-next-line import/prefer-default-export
export class BinaryHeap {
  constructor(collection = [], comparator = (a, b) => a - b) {
    this.data = Array.from(collection, (x) => this.insert(x));
    this.comparator = (a, b) => comparator(this.data[a], this.data[b]);
  }

  min() {
    return this.data.length > 0 ? this.data[0] : null;
  }

  insert(value) {
    const tailIndex = this.data.push(value) - 1;
    this.bubbleUp(tailIndex);

    return this;
  }

  remove(index = 0) {
    const { length } = this.data;
    if (!length) return null;

    this.swap(index, length - 1);

    const value = this.data.pop();
    this.sinkDown(index);

    return value;
  }

  length() {
    return this.data.length;
  }

  /* === Private helpers === */

  bubbleUp(index) {
    let curr = index;
    for (let next = parentNode(index); next >= 0; next = parentNode(next)) {
      if (this.comparator(next, curr) < 0) break;

      this.swap(next, curr);
      curr = next;
    }
  }

  sinkDown(index = 0) {
    const { length } = this.data;

    const validChild = (i) => {
      const left = leftNode(i);
      const right = rightNode(i);

      return (right < length) && this.comparator(left, right) > 0 ? right : left;
    };

    let curr = index;
    for (let next = validChild(curr); leftNode(curr) < length; next = validChild(curr)) {
      if (this.comparator(curr, next) < 0) break;

      this.swap(curr, next);
      curr = next;
    }
  }

  swap(a, b) {
    const { data } = this;
    [data[a], data[b]] = [data[b], data[a]];
  }
}
