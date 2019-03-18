class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertChild(value) {
    const newBinaryTree = new BinaryTree(value);

    const queue = [this];
    let valueInserted = false;

    while (queue.length && !valueInserted) {
      const currentTree = queue.shift();

      if (currentTree.left === null) {
        currentTree.left = newBinaryTree;
        valueInserted = true;
      } else if (currentTree.right === null) {
        currentTree.right = newBinaryTree;
        valueInserted = true;
      } else {
        queue.push(currentTree.left);
        queue.push(currentTree.right);
      }
    }

    return newBinaryTree;
  }

  // left, root, right
  inOrderTraversal(func = console.log) {
    if (this.left) {
      this.left.inOrderTraversal(func);
    }

    func(this);

    if (this.right) {
      this.right.inOrderTraversal(func);
    }
  }

  // root, left, right
  preOrderTraversal(func = console.log) {
    func(this);

    if (this.left) {
      this.left.preOrderTraversal(func);
    }

    if (this.right) {
      this.right.preOrderTraversal(func);
    }
  }

  // left, right, root
  postOrderTraversal(func = console.log) {
    if (this.left) {
      this.left.postOrderTraversal(func);
    }

    if (this.right) {
      this.right.postOrderTraversal(func);
    }

    func(this);
  }
}

export default BinaryTree;