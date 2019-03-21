class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
  }

  contains(value) {
  }

  min(node = null) {
  }

  max(node) {
  }

  remove(value) {
  }

  // left, root, right
  inOrderTraversal(node, func = console.log) {
  }

  // root, left, right
  preOrderTraversal(node, func = console.log) {
  }

  // left, right, root
  postOrderTraversal(node, func = console.log) {
  }
}

export { BinarySearchTree, Node };