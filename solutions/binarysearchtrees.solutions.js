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

    return insertHelper.call(this, this.root, value);
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

    return containsHelper.call(this, this.root, value);
  }

  min(node = null) {
    if (node === null) {
      return;
    }

    if (node.left === null) {
      return node;
    } else {
      return this.min(node.left);
    }
  }

  max(node) {
    if (node === null) {
      return null;
    }

    if (node.right === null) {
      return node;
    } else {
      return this.max(node.right);
    }
  }

  remove(value) {
    function removeHelper(node, value) {
      if (node.value === value) {
        // No children, remove the current node
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

        // two children
        let successor = this.min(node.right);
        let temp = node.value;
        node.value = successor.value;
        successor.value = temp;
        node.right = removeHelper(node.right, temp);
        return node;

      } else if (value < node.value && node.left !== null) {
        node.left = removeHelper.call(this, node.left, value);
      } else if (value > node.value && node.right !== null) {
        node.right = removeHelper.call(this, node.right, value);
      }
      return node;
    }

    this.root = removeHelper.call(this, this.root, value);
  }

  // left, root, right
  inOrderTraversal(node, func = console.log) {
    if (node === null) {
      return false;
    }

    if (node.left !== null) {
      this.inOrderTraversal(node.left, func);
    }

    func(node);

    if (node.right !== null) {
      this.inOrderTraversal(node.right, func);
    }
  }

  // root, left, right
  preOrderTraversal(node, func = console.log) {
    if (node === null) {
      return false;
    }

    func(node);

    if (node.left !== null) {
      this.preOrderTraversal(node.left, func);
    }

    if (node.right !== null) {
      this.preOrderTraversal(node.right, func);
    }
  }

  // left, right, root
  postOrderTraversal(node, func = console.log) {
    if (node === null) {
      return false;
    }

    if (node.left !== null) {
      this.postOrderTraversal(node.left, func);
    }

    if (node.right !== null) {
      this.postOrderTraversal(node.right, func);
    }

    func(node);
  }
}

export { BinarySearchTree, Node };