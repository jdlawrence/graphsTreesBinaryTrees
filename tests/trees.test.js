import Tree from '../src/trees';
import Logger from './logger';

let tree;
let logger;

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

    logger = new Logger();
  });

  afterEach(() => {
    tree = new Tree(1);
  });

  test('should be a function', () => {
    expect(typeof Tree.traverse).toBe('function');
  });

  test('should visit every node', () => {
    Tree.traverse(tree, logger.log);
    expect(logger.values.length).toBe(9);
  });
});

describe('the contains function', () => {
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
    expect(typeof tree.contains).toBe('function');
  });

  test('should return true when the value is somewhere in the tree', () => {
    expect(tree.contains(1)).toBe(true);
    expect(tree.contains(2)).toBe(true);
    expect(tree.contains(2.1)).toBe(true);
    expect(tree.contains(2.21)).toBe(true);
  });

  test('should return false when the value is not in the tree', () => {
    expect(tree.contains(5)).toBe(false);
  });
});

describe('the size function', () => {
  afterEach(() => {
    tree = new Tree(1);
  });

  test('should be a function', () => {
    expect(typeof Tree.size).toBe('function');
  });

  test('should return a number equaling the size of the tree', () => {
    expect(typeof Tree.size(tree)).toBe('number');
    expect(Tree.size(tree)).toBe(1);
    tree.insertChild(2);
    expect(Tree.size(tree)).toBe(2);
    tree.children[0].insertChild(3);
    expect(Tree.size(tree)).toBe(3);
  });
});

describe('the find function', () => {
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
    expect(typeof Tree.find).toBe('function');
  });

  test('should return the tree containing the value', () => {
    let result = Tree.find(tree, 2.3);
    expect(result).toBeInstanceOf(Tree);
    expect(result.value).toBe(2.3);
  });

  test('should return false if the tree does not contain the value', () => {
    let result = Tree.find(tree, 9);
    expect(result).toBe(false);
  });
});

describe('the insert function', () => {
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
    expect(typeof tree.insert).toBe('function');
  });


  test('should insert a new Tree as child of the given Tree', () => {
    let result = Tree.find(tree, 2.3);
    expect(result.contains(8)).toBe(false);
    tree.insert(result, 8);
    expect(result.contains(8)).toBe(true);
  });
});

describe('the remove function', () => {
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
    expect(typeof tree.remove).toBe('function');
  });


  test('should remove the node from the tree it is called on', () => {
    tree.remove(2.3);
    expect(tree.contains(2.3)).toBe(false);
  });
});

describe('the reorder function', () => {
  beforeEach(() => {
    tree.insertChild(2);
    tree.insertChild(3);
    tree.insertChild(4);
    tree.children[0].insertChild(2.1);
    tree.children[0].insertChild(2.2);
    tree.children[0].insertChild(2.3);
    tree.children[0].children[1].insertChild(2.21);
    tree.children[0].children[1].insertChild(2.22);

    logger = new Logger();
  });

  afterEach(() => {
    tree = new Tree(1);
  });

  test('should be a function', () => {
    expect(typeof tree.reorder).toBe('function');
  });


  test('should swap two given nodes in the tree', () => {
    Tree.traverse(tree, logger.log);
    const initialIndex1 = logger.values.indexOf(2.21);
    const initialIndex2 = logger.values.indexOf(2.3);
    tree.reorder(2.21, 2.3);
    Tree.traverse(tree, logger.log);
    const reorderedIndex1 = logger.values.indexOf(2.21);
    const reorderedIndex2 = logger.values.indexOf(2.3);
    expect(reorderedIndex2).toBe(initialIndex1);
    expect(reorderedIndex1).toBe(initialIndex2);
  });

  test('should not the change the order of nodes not being reordered', () => {
    Tree.traverse(tree, logger.log);
    const initialIndex1 = logger.values.indexOf(2.21);
    const initialIndex2 = logger.values.indexOf(2.3);
    tree.reorder(2.3, 4);
    Tree.traverse(tree, logger.log);
    const indexAfterReorder1 = logger.values.indexOf(2.21);
    const indexAfterReorder2 = logger.values.indexOf(2.3);
    expect(initialIndex1).toBe(indexAfterReorder1);
    expect(initialIndex2).toBe(indexAfterReorder2);
  });
});

