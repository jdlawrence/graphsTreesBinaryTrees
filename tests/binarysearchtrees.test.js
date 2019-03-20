import BinarySearchTree from '../solutions/binarysearchtrees.solutions';
import Logger from './logger';

let binarySearchTree;
let logger;

beforeEach(() => {
  binarySearchTree = new BinarySearchTree(1);
});

test('it should be a function', () => {
  expect(typeof BinarySearchTree).toBe('function');
});

test('should have a left and right property', () => {
  expect(binarySearchTree.hasOwnProperty('left')).toBe(true);
  expect(binarySearchTree.hasOwnProperty('right')).toBe(true);
});

describe('the insert function', () => {
  test('should be a function', () => {
    expect(typeof binarySearchTree.insert).toBe('function');
  });

  test('the child should be a binarySearchTree instance', () => {
    binarySearchTree.insert(2);

    expect(binarySearchTree.right).toBeInstanceOf(BinarySearchTree);
  });

  test('should insert in a manner consistent with that of a binary search tree', () => {
    binarySearchTree = new BinarySearchTree(4);
    binarySearchTree.insert(2);
    binarySearchTree.insert(6);
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.insert(5);
    binarySearchTree.insert(7);

    expect(binarySearchTree.value).toBe(4);
    expect(binarySearchTree.left.value).toBe(2);
    expect(binarySearchTree.right.value).toBe(6);
    expect(binarySearchTree.left.left.value).toBe(1);
    expect(binarySearchTree.left.right.value).toBe(3);
    expect(binarySearchTree.right.left.value).toBe(5);
    expect(binarySearchTree.right.right.value).toBe(7);
  });
});

describe('the contains function', () => {
  beforeEach(() => {
    binarySearchTree = new BinarySearchTree(4);
    binarySearchTree.insert(2);
    binarySearchTree.insert(6);
  });

  test('should be a function', () => {
    expect(typeof binarySearchTree.contains).toBe('function');
  });

  test('should return true when the tree contains the value', () => {
    expect(binarySearchTree.contains(4)).toBe(true);
    expect(binarySearchTree.contains(2)).toBe(true);
    expect(binarySearchTree.contains(6)).toBe(true);
  });

  test('should return false when the tree does not contain the value', () => {
    expect(binarySearchTree.contains(4.1)).toBe(false);
    expect(binarySearchTree.contains(11)).toBe(false);
  });
});

describe('the delete function', () => {
  test('should be a function', () => {
    expect(typeof binarySearchTree.delete).toBe('function');
  });

  test('should remove the node with the given value when it has no children', () => {
    binarySearchTree = new BinarySearchTree(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.remove(1);

    expect(binarySearchTree.value).toBe(2);
    expect(binarySearchTree.left).toBe(null);
    expect(binarySearchTree.right.value).toBe(3);
  });

  test('should remove the node with the given value and promote its child when it has one child', () => {
    binarySearchTree = new BinarySearchTree(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(0.5);
    binarySearchTree.insert(3);
    binarySearchTree.remove(1);

    expect(binarySearchTree.value).toBe(2);
    expect(binarySearchTree.left.value).toBe(0.5);
    expect(binarySearchTree.right.value).toBe(3);
  });

  test('should remove the node with the given value and promote its left child when it has two children', () => {
    binarySearchTree = new BinarySearchTree(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(0.5);
    binarySearchTree.insert(1.5);
    binarySearchTree.insert(3);
    binarySearchTree.remove(1);

    expect(binarySearchTree.value).toBe(2);
    expect(binarySearchTree.left.value).toBe(0.5);
    expect(binarySearchTree.left.right.value).toBe(0.5);
    expect(binarySearchTree.right.value).toBe(3);
  });
});

describe('the inOrderTraversal function', () => {
  beforeEach(() => {
    binarySearchTree = new BinarySearchTree(4);
    binarySearchTree.insert(2);
    binarySearchTree.insert(6);
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.insert(5);
    binarySearchTree.insert(7);

    logger = new Logger();
  });

  test('should be a function', () => {
    expect(typeof binarySearchTree.inOrderTraversal).toBe('function');
  });

  test('should visit all nodes in an in-order (left, root, right) pattern', () => {
    binarySearchTree.inOrderTraversal(logger.log);

    // extract the values out of the logger
    const values = logger.values.map(currentBinaryTree => currentBinaryTree.value);

    expect(values).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});

describe('the preOrderTraversal function', () => {
  beforeEach(() => {
    binarySearchTree = new BinarySearchTree(4);
    binarySearchTree.insert(2);
    binarySearchTree.insert(6);
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.insert(5);
    binarySearchTree.insert(7);

    logger = new Logger();
  });

  test('should be a function', () => {
    expect(typeof binarySearchTree.preOrderTraversal).toBe('function');
  });

  test('should visit all nodes in an pre-order (root, left, right) pattern', () => {
    binarySearchTree.preOrderTraversal(logger.log);

    // extract the values out of the logger
    const values = logger.values.map(currentBinaryTree => currentBinaryTree.value);
    expect(values).toEqual([4, 2, 1, 3, 6, 5, 7]);
  });
});

describe('the postOrderTraversal function', () => {
  beforeEach(() => {
    binarySearchTree = new BinarySearchTree(4);
    binarySearchTree.insert(2);
    binarySearchTree.insert(6);
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.insert(5);
    binarySearchTree.insert(7);

    logger = new Logger();
  });

  test('should be a function', () => {
    expect(typeof binarySearchTree.postOrderTraversal).toBe('function');
  });

  test('should visit all nodes in an post-order (left, right, root) pattern', () => {
    binarySearchTree.postOrderTraversal(logger.log);

    // extract the values out of the logger
    const values = logger.values.map(currentBinaryTree => currentBinaryTree.value);

    expect(values).toEqual([1, 3, 2, 5, 7, 6, 4]);
  });
});
