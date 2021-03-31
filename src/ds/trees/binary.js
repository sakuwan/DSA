/* === Binary search tree (BST) ===
 *
 * A binary search tree is a binary tree whose nodes each store a key greater
 * than all the keys in the node's left subtree and less than those in its
 * right subtree.
 *
 * Runtimes:
 *  - insert: O(log n)
 *  - delete: O(log n)
 *  - search: O(log n)
 *  - min:    O(log n)
 *  - max:    O(log n)
*/

const nodeEntry = (value = null, left = null, right = null, count = 1) => ({
  value, left, right, count,
});

const appendNode = (node, parent) => Object.assign(parent, {
  ...(node.value < parent.value) ? { left: node } : { right: node },
});

const findNode = (value, node = null, parent = null) => {
  if (!node || node.value === value) return { node, parent };

  return findNode(value, (value < node.value) ? node.left : node.right, node);
};

const advanceNodeLeft = (node = null) => {
  let currentNode = node;
  while (currentNode && currentNode.left) {
    currentNode = currentNode.left;
  }

  return currentNode;
};

const advanceNodeRight = (node = null) => {
  let currentNode = node;
  while (currentNode && currentNode.right) {
    currentNode = currentNode.right;
  }

  return currentNode;
};

// eslint-disable-next-line import/prefer-default-export
export class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(value) {
    if (!this.size) {
      this.root = nodeEntry(value);
      this.size = 1;

      return this;
    }

    const { node, parent } = findNode(value, this.root);
    if (node) {
      node.count += 1;
    } else {
      appendNode(nodeEntry(value), parent);
    }

    this.size += 1;

    return this;
  }

  delete(value) {
    if (!this.size) return false;

    const { node, parent } = findNode(value, this.root);

    if (!node) return false;
    if (node.count > 1) {
      node.count -= 1;
      this.size -= 1;

      return true;
    }

    let childrenNodes = node.left;
    if (node.right) {
      advanceNodeLeft(node.right).left = node.left;
      childrenNodes = node.right;
    }

    if (node === this.root) {
      this.root = childrenNodes;
    } else if (node === parent.left) {
      parent.left = childrenNodes;
    } else {
      parent.right = childrenNodes;
    }

    this.size -= 1;

    return true;
  }

  search(value) {
    if (!this.size) return false;

    const { node } = findNode(value, this.root);
    return !!node;
  }

  min() {
    if (!this.size) return null;
    if (this.size === 1) return this.root.value;

    return advanceNodeLeft(this.root).value;
  }

  max() {
    if (!this.size) return null;
    if (this.size === 1) return this.root.value;

    return advanceNodeRight(this.root).value;
  }
}
