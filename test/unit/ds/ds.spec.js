import { SinglyLinkedList } from '../../../src/ds/lists/single';
import { BinarySearchTree } from '../../../src/ds/trees/binary';

describe('Data structures: Singly-linked list', () => {
  it('Properly constructs from collections', () => {
    // Empty list
    const testListA = new SinglyLinkedList();
    expect(testListA).toBeInstanceOf(SinglyLinkedList);

    expect(testListA.head).toBe(null);
    expect(testListA.tail).toBe(null);
    expect(testListA.size).toBe(0);

    // From array, 1 -> 2 -> 3 -> 4 -> 5 -> null
    const testListB = new SinglyLinkedList([1, 2, 3, 4, 5]);

    expect(testListB.head.value).toBe(1);
    expect(testListB.tail.value).toBe(5);
    expect(testListB.size).toBe(5);

    // From Set, 1 -> 2 -> 3 -> null
    const testListC = new SinglyLinkedList(new Set([1, 1, 1, 2, 3]));

    expect(testListC.head.value).toBe(1);
    expect(testListC.head.next.value).toBe(2);
    expect(testListC.head.next.next.value).toBe(3);
    expect(testListC.head.next.next).toBe(testListC.tail);
    expect(testListC.head.next.next.next).toBe(null);
    expect(testListC.size).toBe(3);
  });

  it('Performs add, insert, and remove', () => {
    // From array, 1 -> 2 -> 3 -> null
    const testListA = new SinglyLinkedList([1, 2, 3]);

    // Current tail (3)
    let oldTail = testListA.tail;

    // Append new tail (4) -> [1, 2, 3, 4]
    testListA.add(4);
    expect(testListA.tail).not.toBe(oldTail);
    expect(testListA.tail.value).toBe(4);
    expect(testListA.size).toBe(4);

    // Current tail (4)
    oldTail = testListA.tail;

    // Chain append new tails (5, 6) -> [1, 2, 3, 4, 5, 6]
    testListA.add(5).add(6);
    expect(testListA.tail).not.toBe(oldTail);
    expect(oldTail.next.next).toBe(testListA.tail);
    expect(testListA.tail.value).toBe(6);
    expect(testListA.size).toBe(6);

    // Empty list
    const testListB = new SinglyLinkedList([]);

    // Insert new head (1) -> [1]
    testListB.insert(0, 1);
    expect(testListB.head).toBe(testListB.tail);
    expect(testListB.head.value).toBe(1);
    expect(testListB.size).toBe(1);

    // Insert new head (0) -> [0, 1]
    testListB.insert(0, 0);
    expect(testListB.head).not.toBe(testListB.tail);
    expect(testListB.head.value).toBe(0);
    expect(testListB.size).toBe(2);

    // Insert new tail (100) -> [0, 1, 100]
    testListB.insert(testListB.size, 100);
    expect(testListB.tail.value).toBe(100);
    expect(testListB.size).toBe(3);

    // Insert at index 1 (3) -> [0, 3, 1, 100]
    testListB.insert(1, 3);
    expect(testListB.head.next.value).toBe(3);
    expect(testListB.size).toBe(4);

    // Out of bounds, expect RangeError
    expect(() => testListB.insert(-1, -1)).toThrowError(RangeError);
    expect(() => testListB.insert(100, -1)).toThrowError(RangeError);

    // From array, 1 -> 2 -> 3 -> 4 -> 5 -> null
    const testListC = new SinglyLinkedList([1, 2, 3, 4, 5]);

    // Remove head (1) -> [2, 3, 4, 5]
    testListC.remove(0);
    expect(testListC.head.value).toBe(2);
    expect(testListC.size).toBe(4);

    // Remove tail (5) -> [2, 3, 4]
    testListC.remove(testListC.size - 1);
    expect(testListC.tail.value).toBe(4);
    expect(testListC.size).toBe(3);

    // Remove index 1 (3) -> [2, 4]
    testListC.remove(1);
    expect(testListC.head.next.value).toBe(4);
    expect(testListC.size).toBe(2);

    // Out of bounds, expect RangeError
    expect(() => testListC.remove(-1)).toThrowError(RangeError);
    expect(() => testListC.remove(100)).toThrowError(RangeError);
  });

  it('Performs push and pop', () => {
    // From array, 1 -> 2 -> 3 -> 4 -> 5 -> null
    const testListA = new SinglyLinkedList([1, 2, 3, 4, 5]);

    // Push is an alias of add, refer to prior test
    // Append new tail (6) -> [1, 2, 3, 4, 5, 6]
    testListA.push(6);
    expect(testListA.tail.value).toBe(6);
    expect(testListA.size).toBe(6);

    // Remove tail node, return value (6) -> [1, 2, 3, 4, 5]
    const tailValue = testListA.pop();
    expect(tailValue).toBe(6);
    expect(testListA.size).toBe(5);
    expect(testListA.head.next.next.next.next).not.toBe(null);
    expect(testListA.head.next.next.next.next.next).toBe(null);
    expect(testListA.tail.next).toBe(null);
    expect(testListA.tail.value).toBe(5);

    // Empty list
    const testListB = new SinglyLinkedList([]);

    // Invalid call, expect ReferenceError
    expect(() => testListB.pop()).toThrowError(ReferenceError);
  });

  it('Performs shift and unshift', () => {
    // From array, 1 -> 2 -> 3 -> 4 -> 5 -> null
    const testListA = new SinglyLinkedList([1, 2, 3, 4, 5]);

    // Unshift is an alias of insert(0, value), refer to prior test
    // Insert new head, (0) -> [0, 1, 2, 3, 4, 5]
    testListA.unshift(0);
    expect(testListA.head.value).toBe(0);
    expect(testListA.size).toBe(6);

    // Remove head node, return value (0) -> [1, 2, 3, 4, 5]
    const headValue = testListA.shift();
    expect(headValue).toBe(0);
    expect(testListA.size).toBe(5);
    expect(testListA.head.next.next.next.next).not.toBe(null);
    expect(testListA.head.next.next.next.next.next).toBe(null);

    // Empty list
    const testListB = new SinglyLinkedList([]);

    // Invalid call, expect ReferenceError
    expect(() => testListB.shift()).toThrowError(ReferenceError);
  });

  it('Performs append', () => {
    // Empty list
    const testListA = new SinglyLinkedList([]);

    // Appending is simply repeated add calls, already tested in constructor
    testListA.append([1, 2, 3]);
    expect(testListA.head.value).toBe(1);
    expect(testListA.head.next.value).toBe(2);
    expect(testListA.head.next.next.value).toBe(3);
    expect(testListA.size).toBe(3);
  });

  it('Performs get and set', () => {
    // From array, 1 -> 2 -> 3 -> 4 -> 5 -> null
    const testListA = new SinglyLinkedList([1, 2, 3, 4, 5]);

    // Get index 2 (3)
    const getValue = testListA.get(2);
    expect(getValue).toBe(3);

    // Set index 2 (3) -> [1, 2, 100, 4, 5]
    testListA.set(2, 100);
    expect(testListA.head.next.next.value).toBe(100);
    expect(testListA.size).toBe(5);

    // Get index 2 (100)
    const newGetValue = testListA.get(2);
    expect(newGetValue).toBe(100);

    // Set head and tail nodes (1, 5) -> [-1, 2, 100, 4, -5]
    testListA.set(0, -1).set(testListA.size - 1, -5);
    expect(testListA.head.value).toBe(-1);
    expect(testListA.tail.value).toBe(-5);
    expect(testListA.size).toBe(5);

    // Get head node (-1)
    const headValue = testListA.get(0);
    expect(headValue).toBe(-1);

    // Get tail node (-5)
    const tailValue = testListA.get(testListA.size - 1);
    expect(tailValue).toBe(-5);

    // Empty list
    const testListB = new SinglyLinkedList([]);

    // Out of bounds or invalid call, expect RangeError
    expect(() => testListB.get(0)).toThrowError(RangeError);
    expect(() => testListB.get(-1)).toThrowError(RangeError);
    expect(() => testListB.get(100)).toThrowError(RangeError);

    expect(() => testListB.set(0, 1)).toThrowError(RangeError);
    expect(() => testListB.set(-1, 1)).toThrowError(RangeError);
    expect(() => testListB.set(100, 1)).toThrowError(RangeError);
  });

  it('Performs find', () => {
    // From array, 1 -> 1 -> 2 -> 3 -> 4 -> 5 -> null
    const testListA = new SinglyLinkedList([1, 1, 2, 3, 4, 5]);

    // Find first node of value 1 (head)
    const headIndex = testListA.find(1);
    expect(headIndex).toBe(0);
    expect(testListA.head.value).toBe(1);

    // Find first node of value 5 (tail)
    const tailIndex = testListA.find(5);
    expect(tailIndex).toBe(5);
    expect(testListA.tail.value).toBe(5);

    // Find first node of value 3 (3)
    const middleIndex = testListA.find(3);
    expect(middleIndex).toBe(3);
    expect(testListA.get(middleIndex)).toBe(3);

    // Find value that doesn't exist, expect -1
    const notFound = testListA.find(100);
    expect(notFound).toBe(-1);

    // Empty list
    const testListB = new SinglyLinkedList([]);

    // Find returns -1 on empty list
    const emptyFind = testListB.find(1);
    expect(emptyFind).toBe(-1);
  });

  it('Performs map', () => {
    // From array, 1 -> 2 -> 3 -> null
    const testListA = new SinglyLinkedList([1, 2, 3]);

    // Increase the value of all nodes by one -> [2, 3 ,4]
    testListA.map((x) => x + 1);
    expect(testListA.head.value).toBe(2);
    expect(testListA.head.next.value).toBe(3);
    expect(testListA.head.next.next.value).toBe(4);
    expect(testListA.size).toBe(3);

    // Map the value of the nodes to their index -> [0, 1, 2]
    testListA.map((_, i) => i);
    expect(testListA.head.value).toBe(0);
    expect(testListA.head.next.value).toBe(1);
    expect(testListA.head.next.next.value).toBe(2);
    expect(testListA.size).toBe(3);

    // Invalid callback function, expect TypeError
    expect(() => testListA.map(null)).toThrowError(TypeError);

    // Empty list
    const testListB = new SinglyLinkedList([]);

    // No-op on empty lists
    testListB.map((x) => x);
    expect(testListB.head).toBe(null);
    expect(testListB.tail).toBe(null);
    expect(testListB.size).toBe(0);
  });

  it('Performs clear', () => {
    // From array, 1 -> 2 -> 3 -> null
    const testListA = new SinglyLinkedList([1, 2, 3]);

    // Clear the list, setting head & tail to null and size to 0
    testListA.clear();
    expect(testListA.head).toBe(null);
    expect(testListA.tail).toBe(null);
    expect(testListA.size).toBe(0);

    // Empty list
    const testListB = new SinglyLinkedList([]);

    // No-op on empty lists
    testListB.clear();
    expect(testListB.head).toBe(null);
    expect(testListB.tail).toBe(null);
    expect(testListB.size).toBe(0);
  });

  it('Performs isEmpty', () => {
    // From array, 1 -> 2 -> 3 -> null
    const testListA = new SinglyLinkedList([1, 2, 3]);

    // Expect false
    const notEmpty = testListA.isEmpty();
    expect(notEmpty).toBe(false);

    // Clear list via repeated pop calls
    testListA.pop();
    testListA.pop();
    testListA.pop();

    const isNowEmpty = testListA.isEmpty();
    expect(isNowEmpty).toBe(true);

    // Empty list
    const testListB = new SinglyLinkedList([]);

    // Expect true
    const isEmpty = testListB.isEmpty();
    expect(isEmpty).toBe(true);
  });

  it('Performs length', () => {
    // From array, 1 -> 2 -> 3 -> null
    const testListA = new SinglyLinkedList([1, 2, 3]);

    // Simple getter alias, 3 -> 3
    expect(testListA.length).toBe(testListA.size);

    // Empty list
    const testListB = new SinglyLinkedList([]);

    // Simple getter alias, 0 -> 0
    expect(testListB.length).toBe(testListB.size);
  });

  it('Performs iteration', () => {
    // From array, 1 -> 2 -> 3 -> null
    const testListA = new SinglyLinkedList([1, 2, 3]);

    // Spreading into an array -> [value, index]
    const asArray = [...testListA];
    expect(asArray[0]).toEqual([1, 0]);
    expect(asArray[1]).toEqual([2, 1]);
    expect(asArray[2]).toEqual([3, 2]);
    expect(asArray.length).toBe(3);

    // Empty list
    const testListB = new SinglyLinkedList([]);

    // Expect empty array
    const emptyArray = [...testListB];
    expect(emptyArray.length).toBe(0);
  });
});

describe('Data structures: Binary search tree', () => {
  it('Properly constructs', () => {
    // Empty tree
    const testTree = new BinarySearchTree();
    expect(testTree).toBeInstanceOf(BinarySearchTree);
    expect(testTree.root).toBe(null);
    expect(testTree.size).toBe(0);
  });

  it('Performs insert', () => {
    // Empty tree
    const testTree = new BinarySearchTree();

    /* Insert 10
          10
      null  null
    */
    testTree.insert(10);
    expect(testTree.root).not.toBe(null);
    expect(testTree.root.value).toBe(10);
    expect(testTree.size).toBe(1);

    /* Insert 15
          10
      null  15
    */
    testTree.insert(15);
    expect(testTree.root.right).not.toBe(null);
    expect(testTree.root.right.value).toBe(15);
    expect(testTree.root.left).toBe(null);
    expect(testTree.size).toBe(2);

    /* Insert 5
          10
        5   15
    */
    testTree.insert(5);
    expect(testTree.root.left).not.toBe(null);
    expect(testTree.root.left.value).toBe(5);
    expect(testTree.size).toBe(3);

    /* Insert 10
          10 (2)
        5   15
    */
    testTree.insert(10);
    expect(testTree.root.count).toBe(2);
    expect(testTree.size).toBe(4);

    /* Insert 7.5
          10
        5   15
         7.5
    */
    testTree.insert(7.5);
    expect(testTree.root.left.right).not.toBe(null);
    expect(testTree.root.left.right.value).toBe(7.5);
    expect(testTree.size).toBe(5);
  });

  it('Performs delete', () => {
    // Empty tree
    const testTreeA = new BinarySearchTree();

    /*
          10
      5       15
    */
    testTreeA.insert(10).insert(15).insert(5);

    // Remove right-most node, no children
    testTreeA.delete(15);
    expect(testTreeA.root.right).toBe(null);
    expect(testTreeA.size).toBe(2);

    // Remove left-most node, no children
    testTreeA.delete(5);
    expect(testTreeA.root.left).toBe(null);
    expect(testTreeA.size).toBe(1);

    /* Rebuild tree with children
          10
      5          15
       7.5 | 12.5
    */
    testTreeA.insert(15).insert(5).insert(7.5).insert(12.5);

    // Remove node with right child
    testTreeA.delete(7.5);
    expect(testTreeA.root.left.right).toBe(null);
    expect(testTreeA.size).toBe(4);

    // Remove node with left child
    testTreeA.delete(12.5);
    expect(testTreeA.root.right.left).toBe(null);
    expect(testTreeA.size).toBe(3);

    /* Rebuild tree with children
          10
       5          15
    2.5 7.5 | 12.5  17.5
    */
    testTreeA.insert(7.5).insert(12.5).insert(2.5).insert(17.5);

    // Remove left node with children
    testTreeA.delete(5);
    expect(testTreeA.root.left.value).toBe(7.5);
    expect(testTreeA.root.left.right).toBe(null);
    expect(testTreeA.root.left.left.value).toBe(2.5);
    expect(testTreeA.size).toBe(6);

    // Remove right node with children
    testTreeA.delete(15);
    expect(testTreeA.root.right.value).toBe(17.5);
    expect(testTreeA.root.right.right).toBe(null);
    expect(testTreeA.root.right.left.value).toBe(12.5);
    expect(testTreeA.size).toBe(5);

    // Remove root element
    testTreeA.delete(10);
    expect(testTreeA.root.value).toBe(17.5);
    expect(testTreeA.root.right).toBe(null);
    expect(testTreeA.root.left.value).toBe(12.5);
    expect(testTreeA.root.left.left.value).toBe(7.5);
    expect(testTreeA.root.left.left.left.value).toBe(2.5);
    expect(testTreeA.size).toBe(4);

    // Expect true on found
    const wasFound = testTreeA.delete(17.5);
    expect(wasFound).toBe(true);

    // Expect false on not found
    const notFound = testTreeA.delete(10);
    expect(notFound).toBe(false);

    // Empty tree
    const testTreeB = new BinarySearchTree();

    // Expect false on empty tree
    const falseOnEmpty = testTreeB.delete(1);
    expect(falseOnEmpty).toBe(false);
  });

  it('Performs search', () => {
    // Empty tree
    const testTreeA = new BinarySearchTree();

    /*
          10
      5       15
    */
    testTreeA.insert(10).insert(15).insert(5);

    // Expect true on found
    const wasFound = testTreeA.search(10);
    expect(wasFound).toBe(true);

    // Expect false on not found
    const notFound = testTreeA.search(1);
    expect(notFound).toBe(false);

    // Empty tree
    const testTreeB = new BinarySearchTree();

    // Expect false on empty tree
    const falseOnEmpty = testTreeB.search(1);
    expect(falseOnEmpty).toBe(false);
  });
});
