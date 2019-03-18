import BinaryTree from '../src/binarytrees';
import Logger from './logger';

let binaryTree;
let logger;

beforeEach(() => {
  binaryTree = new BinaryTree(1);
});

test('it should be a function', () => {
  expect(typeof BinaryTree).toBe('function');
});

test('should have a left and right property', () => {
  expect(binaryTree.hasOwnProperty('left')).toBe(true);
  expect(binaryTree.hasOwnProperty('right')).toBe(true);
});

describe('the insertChild function', () => {
  afterEach(() => {
    binaryTree.left = null;
    binaryTree.right = null;
  });

  test('should be a function', () => {
    expect(typeof binaryTree.insertChild).toBe('function');
  });

  test('the child should be a BinaryTree instance', () => {
    binaryTree.insertChild(2);
    binaryTree.insertChild(3);

    expect(binaryTree.left).toBeInstanceOf(BinaryTree);
  });

  test('should insert children in a level order', () => {
    binaryTree.insertChild(2);
    binaryTree.insertChild(3);
    binaryTree.insertChild(4);
    binaryTree.insertChild(5);
    binaryTree.insertChild(6);
    binaryTree.insertChild(7);

    expect(binaryTree.left.value).toBe(2);
    expect(binaryTree.right.value).toBe(3);
    expect(binaryTree.left.left.value).toBe(4);
    expect(binaryTree.left.right.value).toBe(5);
    expect(binaryTree.right.left.value).toBe(6);
    expect(binaryTree.right.right.value).toBe(7);
  });
});

describe('the inOrderTraversal function', () => {
  beforeEach(() => {
    binaryTree.insertChild(2);
    binaryTree.insertChild(3);
    binaryTree.insertChild(4);
    binaryTree.insertChild(5);
    binaryTree.insertChild(6);
    binaryTree.insertChild(7);

    logger = new Logger();
  });

  afterEach(() => {
    binaryTree.left = null;
    binaryTree.right = null;
  });

  test('should be a function', () => {
    expect(typeof binaryTree.inOrderTraversal).toBe('function');
  });

  test('should visit all nodes in an in-order (left, root, right) pattern', () => {
    binaryTree.inOrderTraversal(logger.log);

    // extract the values out of the logger
    const values = logger.values.map(currentBinaryTree => currentBinaryTree.value);

    expect(values).toEqual([4, 2, 5, 1, 6, 3, 7]);
  });
});

describe('the preOrderTraversal function', () => {
  beforeEach(() => {
    binaryTree.insertChild(2);
    binaryTree.insertChild(3);
    binaryTree.insertChild(4);
    binaryTree.insertChild(5);
    binaryTree.insertChild(6);
    binaryTree.insertChild(7);

    logger = new Logger();
  });

  afterEach(() => {
    binaryTree.left = null;
    binaryTree.right = null;
  });

  test('should be a function', () => {
    expect(typeof binaryTree.preOrderTraversal).toBe('function');
  });

  test('should visit all nodes in an pre-order (root, left, right) pattern', () => {
    binaryTree.preOrderTraversal(logger.log);

    // extract the values out of the logger
    const values = logger.values.map(currentBinaryTree => currentBinaryTree.value);
    expect(values).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });
});

describe('the postOrderTraversal function', () => {
  beforeEach(() => {
    binaryTree.insertChild(2);
    binaryTree.insertChild(3);
    binaryTree.insertChild(4);
    binaryTree.insertChild(5);
    binaryTree.insertChild(6);
    binaryTree.insertChild(7);

    logger = new Logger();
  });

  afterEach(() => {
    binaryTree.left = null;
    binaryTree.right = null;
  });

  test('should be a function', () => {
    expect(typeof binaryTree.postOrderTraversal).toBe('function');
  });

  test('should visit all nodes in an post-order (left, right, root) pattern', () => {
    binaryTree.postOrderTraversal(logger.log);

    // extract the values out of the logger
    const values = logger.values.map(currentBinaryTree => currentBinaryTree.value);

    expect(values).toEqual([4, 5, 2, 6, 7, 3, 1]);
  });
});
