/* === Singly-linked List ===
 *
 * Collection of nodes in a linear ordering, each node has a singular value
 * and a reference to the next element in the chain, or null if it is the
 * last element.
 *
 * Runtimes:
 *  - constructor: O(n)
 *  - add:         O(1)
 *  - insert:      O(n)
 *  - remove:      O(n) expected, O(1) first element
 *  - push:        O(1)
 *  - pop:         O(n)
 *  - append:      O(n)
 *  - get:         O(n) expected, O(1) first / last element
 *  - set:         O(n) expected, O(1) first / last element
 *  - find:        O(n) expected, O(1) first / last element
 *  - map:         O(n) expected, O(1) first / last element
 *  - clear:       O(1)
 *  - isEmpty:     O(1)
 *  - length:      O(1)
*/

const nodeEntry = (value = null, next = null) => ({ value, next });

const advanceNode = (distance, node) => {
  let currentNode = node;
  for (let i = 0; i < distance; i += 1) {
    currentNode = currentNode.next;
  }

  return currentNode;
};

// eslint-disable-next-line import/prefer-default-export
export class SinglyLinkedList {
  constructor(collection = []) {
    this.head = null;
    this.tail = null;
    this.size = 0;

    this.append(collection);
  }

  add(value) {
    if (!this.size) {
      this.head = nodeEntry(value);
      this.tail = this.head;
      this.size = 1;

      return this;
    }

    this.tail.next = nodeEntry(value);
    this.tail = this.tail.next;
    this.size += 1;

    return this;
  }

  insert(index, value) {
    if (index < 0 || index > this.size) {
      throw new RangeError(`Index ${index} is out of bounds [0...${this.size - 1}]`);
    }

    if (!this.size) return this.add(value);

    if (!index) {
      const node = nodeEntry(value, this.head);

      this.head = node;
      this.size += 1;

      return this;
    }

    if (index === this.size) {
      const node = nodeEntry(value);

      this.tail.next = node;
      this.tail = node;
      this.size += 1;

      return this;
    }

    const insertPosition = advanceNode(index - 1, this.head);
    const node = nodeEntry(value, insertPosition.next);

    insertPosition.next = node;
    this.size += 1;

    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      const listSize = this.size ? this.size - 1 : 0;
      throw new RangeError(`Index ${index} is out of bounds [0...${listSize}]`);
    }

    if (!index) {
      if (this.size === 1) return this.clear();

      this.head = this.head.next;
      this.size -= 1;

      return this;
    }

    const removePosition = advanceNode(index - 1, this.head);

    if (!removePosition.next.next) {
      removePosition.next = null;
      this.tail = removePosition;
    } else {
      removePosition.next = removePosition.next.next;
    }

    this.size -= 1;

    return this;
  }

  push(value) { return this.add(value); }

  pop() {
    if (!this.size) {
      throw new ReferenceError('List has no elements');
    }

    if (this.size === 1) {
      const { value } = this.head;
      this.clear();

      return value;
    }

    const removePosition = advanceNode(this.size - 2, this.head);
    const { value } = removePosition.next;

    removePosition.next = null;
    this.tail = removePosition;
    this.size -= 1;

    return value;
  }

  append(collection) {
    Array.from(collection, (x) => this.add(x));

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      const listSize = this.size ? this.size - 1 : 0;
      throw new RangeError(`Index ${index} is out of bounds [0...${listSize}]`);
    }

    if (!index) return this.head.value;
    if (index === this.size - 1) return this.tail.value;

    return advanceNode(index, this.head).value;
  }

  set(index, value) {
    if (index < 0 || index >= this.size) {
      const listSize = this.size ? this.size - 1 : 0;
      throw new RangeError(`Index ${index} is out of bounds [0...${listSize}]`);
    }

    if (!index) {
      this.head.value = value;

      return this;
    }

    if (index === this.size - 1) {
      this.tail.value = value;

      return this;
    }

    advanceNode(index, this.head).value = value;

    return this;
  }

  find(value) {
    if (!this.size) return -1;

    if (this.head.value === value) return 0;
    if (this.tail.value === value) return this.size - 1;

    let currentNode = this.head.next;
    for (let i = 1; i < this.size - 1; i += 1) {
      if (currentNode.value === value) return i;

      currentNode = currentNode.next;
    }

    return -1;
  }

  map(fn) {
    if (!fn || typeof fn !== 'function') {
      throw TypeError('Provided argument fn must be a function');
    }

    if (!this.size) return this;

    let currentNode = this.head;
    for (let i = 0; i < this.size; i += 1) {
      currentNode.value = fn(currentNode.value, i);
      currentNode = currentNode.next;
    }

    return this;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;

    return this;
  }

  isEmpty() { return this.size === 0; }

  get length() { return this.size; }

  * [Symbol.iterator]() {
    let currentNode = this.head;

    for (let i = 0; i < this.size; i += 1) {
      yield [currentNode.value, i];

      currentNode = currentNode.next;
    }
  }

  toString() { return [...this].map(([v, i]) => `(${i}, ${v})`).join(' → '); }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this.size;

    return this.toString();
  }
}
