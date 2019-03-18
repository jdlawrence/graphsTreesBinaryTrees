import Logger from './logger';

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

const jamil = new BinaryTree(10);
jamil.left = new BinaryTree(11);
jamil.right = new BinaryTree(9);
jamil.left.left = new BinaryTree(7);
jamil.right.left = new BinaryTree(15);
// jamil.right.right = new BinaryTree(8);

const akeem = new BinaryTree(1);
akeem.left = new BinaryTree(2);
akeem.right = new BinaryTree(3);
akeem.insertChild(4);
jamil.insertChild(12);
jamil.insertChild(132);

const kyle = new BinaryTree(1);
kyle.insertChild(2);
kyle.insertChild(3);
kyle.insertChild(4);
kyle.insertChild(5);
kyle.insertChild(6);
kyle.insertChild(7);

const logger = new Logger();

console.log('Akeem', akeem);
console.log('jamil', jamil);
console.log('kyle', kyle);
kyle.preOrderTraversal(logger.log);

export default BinaryTree;