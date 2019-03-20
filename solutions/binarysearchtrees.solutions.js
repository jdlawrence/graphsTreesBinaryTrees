import Logger from '../tests/logger';

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

    function insertHelper(node, value) {
      if (node === null) {
        this.root = new Node(value);
        return this.root;
      }

      if (value <= node.value) {
        if (node.left === null) {
          node.left = new Node(value);
          return node.left;
        } else {
          insertHelper(node.left, value);
        }
      } else {
        if (node.right === null) {
          node.right = new Node(value);
          return node.right;
        } else {
          insertHelper(node.right, value);
        }
      }
    }

    insertHelper.bind(this, this.root, value)();
  }

  contains(value) {
    function containsHelper(node, value) {
      if (node === null) {
        return false;
      }

      if (node.value === value) {
        return true;
      } else if (value < node.value && node.left !== null) {
        return containsHelper(node.left, value);
      } else if (value > node.value && node.left !== null) {
        return containsHelper(node.right, value);
      }
      return false;
    }

    return containsHelper.bind(this, this.root, value)();
  }

  delete(value) {
    function deleteHelper(node, value) {
      if (node.value === value) {
        // No children, delete the current node
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }

        // One child
        if (node.left === null) {
          node = node.right;
          return node;
        }

        if (node.right === null) {
          node = node.left;
          return node;
        }

      } else if (value < node.value && node.left !== null) {
        node.left = deleteHelper(node.left, value);
      } else if (value > node.value && node.right !== null) {
        node.right = deleteHelper(node.right, value);
      }
      return node;
    }

    this.root = deleteHelper.bind(this, this.root, value)();
  }

  // left, root, right
  inOrderTraversal(node, func = console.log) {
    if (node === null) {
      return false;
    }

    if (node.left) {
      this.inOrderTraversal(node.left, func);
    }

    func(node);

    if (node.right) {
      this.inOrderTraversal(node.right, func);
    }
  }

  // root, left, right
  preOrderTraversal(node, func = console.log) {
    if (node === null) {
      return false;
    }

    func(node);

    if (node.left) {
      node.left.preOrderTraversal(func);
    }

    if (node.right) {
      node.right.preOrderTraversal(func);
    }
  }

  // left, right, root
  postOrderTraversal(func = console.log) {
    if (node === null) {
      return false;
    }

    if (node.left) {
      node.left.postOrderTraversal(func);
    }

    if (node.right) {
      node.right.postOrderTraversal(func);
    }

    func(node);
  }
}

let dummy;
dummy = new BinarySearchTree();
dummy.insert(4);
dummy.insert(2);
dummy.insert(6);
// dummy.insert(1);
// dummy.insert(3);
// dummy.insert(5);
// dummy.insert(7);
console.log('4', dummy.contains(4));
console.log('2', dummy.contains(2));
console.log('1', dummy.contains(1));
console.log('3', dummy.contains(3));
console.log('6', dummy.contains(6));
console.log('8', dummy.contains(8));

let logger = new Logger();

dummy.inOrderTraversal(dummy.root, logger.log);
console.log('before delete', logger.values.map(node => node.value));
logger.clear();
dummy.delete(4);
dummy.inOrderTraversal(dummy.root, logger.log);
console.log('after delete', logger.values.map(node => node.value));

export default BinarySearchTree;