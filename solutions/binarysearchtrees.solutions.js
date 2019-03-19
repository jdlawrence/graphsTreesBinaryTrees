class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if (this.value === value) {
      return true;
    } else if (value < this.value && this.left !== null) {
      return this.left.contains(value);
    } else if (value > this.value && this.left !== null) {
      return this.right.contains(value);
    }
    return false;
  }

  delete(value) {
    // if (this.value === value) {
    //   if (this.left !== null && this.right !== null) {

    //   }
    // }
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

export default BinarySearchTree;