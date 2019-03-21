import { BinarySearchTree, Node } from '../src/binarysearchtrees';
import Logger from './logger';

let binarySearchTree;
let logger;

beforeEach(() => {
  binarySearchTree = new BinarySearchTree();
});

test('it should be a function', () => {
  expect(typeof BinarySearchTree).toBe('function');
});

test('should have a root property', () => {
  expect(binarySearchTree.hasOwnProperty('root')).toBe(true);
});

describe('the insert function', () => {
  test('should be a function', () => {
    expect(typeof binarySearchTree.insert).toBe('function');
  });

  test('the child should be a Node instance', () => {
    binarySearchTree.insert(2);
    binarySearchTree.insert(4);

    expect(binarySearchTree.root.right).toBeInstanceOf(Node);
  });

  test('should insert in a manner consistent with that of a binary search tree', () => {
    binarySearchTree.insert(4);
    binarySearchTree.insert(2);
    binarySearchTree.insert(6);
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.insert(5);
    binarySearchTree.insert(7);

    expect(binarySearchTree.root.value).toBe(4);
    expect(binarySearchTree.root.left.value).toBe(2);
    expect(binarySearchTree.root.right.value).toBe(6);
    expect(binarySearchTree.root.left.left.value).toBe(1);
    expect(binarySearchTree.root.left.right.value).toBe(3);
    expect(binarySearchTree.root.right.left.value).toBe(5);
    expect(binarySearchTree.root.right.right.value).toBe(7);
  });
});

describe('the contains function', () => {
  beforeEach(() => {
    binarySearchTree.insert(4);
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

describe('the min function', () => {
  beforeEach(() => {
    binarySearchTree.insert(4);
    binarySearchTree.insert(2);
    binarySearchTree.insert(6);
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.insert(5);
    binarySearchTree.insert(7);
  });

  test('should be a function', () => {
    expect(typeof binarySearchTree.min).toBe('function');
  });

  test('should return the node containing the minimum value', () => {
    expect(binarySearchTree.min(binarySearchTree.root)).toEqual(new Node(1));
    expect(binarySearchTree.min(binarySearchTree.root.right)).toEqual(new Node(5));
  });
});

describe('the max function', () => {
  beforeEach(() => {
    binarySearchTree.insert(4);
    binarySearchTree.insert(2);
    binarySearchTree.insert(6);
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.insert(5);
    binarySearchTree.insert(7);
  });

  test('should be a function', () => {
    expect(typeof binarySearchTree.max).toBe('function');
  });

  test('should return the node containing the maximum value', () => {
    expect(binarySearchTree.max(binarySearchTree.root)).toEqual(new Node(7));
    expect(binarySearchTree.max(binarySearchTree.root.left)).toEqual(new Node(3));
  });
});

describe('the remove function', () => {
  beforeEach(() => {
    binarySearchTree = new BinarySearchTree();
  })
  test('should be a function', () => {
    expect(typeof binarySearchTree.remove).toBe('function');
  });

  test('should remove the node with the given value when it has no children', () => {
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.remove(1);

    expect(binarySearchTree.root.value).toBe(2);
    expect(binarySearchTree.root.left).toBe(null);
    expect(binarySearchTree.root.right.value).toBe(3);
  });

  test('should remove the node with the given value and promote its child when it has one child', () => {
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(0.5);
    binarySearchTree.insert(3);
    binarySearchTree.remove(1);

    expect(binarySearchTree.root.value).toBe(2);
    expect(binarySearchTree.root.left.value).toBe(0.5);
    expect(binarySearchTree.root.right.value).toBe(3);
  });

  test('should remove the node with the given value and promote its successor when it has two children', () => {
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(0.5);
    binarySearchTree.insert(1.5);
    binarySearchTree.insert(3);
    binarySearchTree.remove(1);

    expect(binarySearchTree.root.value).toBe(2);
    expect(binarySearchTree.root.left.value).toBe(1.5);
    expect(binarySearchTree.root.left.left.value).toBe(0.5);
    expect(binarySearchTree.root.right.value).toBe(3);
  });
});

describe('the inOrderTraversal function', () => {
  beforeEach(() => {
    binarySearchTree.insert(4);
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
    binarySearchTree.inOrderTraversal(binarySearchTree.root, logger.log);

    // extract the values out of the logger
    const values = logger.values.map(currentBinaryTree => currentBinaryTree.value);

    expect(values).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});

describe('the preOrderTraversal function', () => {
  beforeEach(() => {
    binarySearchTree.insert(4);
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
    binarySearchTree.preOrderTraversal(binarySearchTree.root, logger.log);

    // extract the values out of the logger
    const values = logger.values.map(currentBinaryTree => currentBinaryTree.value);
    expect(values).toEqual([4, 2, 1, 3, 6, 5, 7]);
  });
});

describe('the postOrderTraversal function', () => {
  beforeEach(() => {
    binarySearchTree.insert(4);
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
    binarySearchTree.postOrderTraversal(binarySearchTree.root, logger.log);

    // extract the values out of the logger
    const values = logger.values.map(currentBinaryTree => currentBinaryTree.value);

    expect(values).toEqual([1, 3, 2, 5, 7, 6, 4]);
  });
});
