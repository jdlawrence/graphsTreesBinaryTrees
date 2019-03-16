import Tree from './trees';
import Logger from './logger';

let tree;
beforeEach(() => {
  tree = new Tree(1);
});

test('it should be a function', () => {
  expect(typeof Tree).toBe('function');
});

describe('the insertChild function', () => {
  beforeEach(() => {
    tree.insertChild(2);
  });

  test('should be a function', () => {
    expect(typeof tree.insertChild).toBe('function');
  });

  test('should add a new Tree to the children array', () => {
    expect(tree.children.length).toBe(1);
  });

  test('the child should be a Tree instance', () => {
    expect(tree.children[0]).toBeInstanceOf(Tree);
    expect(tree.children[0]).toEqual(new Tree(2));
  });

});

describe('the traverse function', () => {
  beforeEach(() => {
    tree.insertChild(2);
    tree.insertChild(3);
    tree.insertChild(4);
    tree.children[0].insertChild(2.1);
    tree.children[0].insertChild(2.2);
    tree.children[0].insertChild(2.3);
    tree.children[0].children[1].insertChild(2.21);
    tree.children[0].children[1].insertChild(2.22);
  });

  afterEach(() => {
    tree = new Tree(1);
  });

  test('should be a function', () => {
    expect(typeof tree.traverse).toBe('function');
  });

  test('should visit every node', () => {
    const logger = new Logger();
    tree.traverse(tree, logger.log);
    expect(logger.values.length).toBe(9);
  });
});