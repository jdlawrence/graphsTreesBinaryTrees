class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  insertChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
  }

  // Uses a Breadth-First Traversal
  traverse(tree, func = console.log) {
    func(tree.value);
    tree.children.forEach(child => {
      this.traverse(child, func);
    });
  }

  contains(searchValue) {
    let result = false;
    this.traverse(this, (currentValue) => {
      result = result || currentValue === searchValue;
    });
    return result;
  }
}

const jamil = new Tree(1);
jamil.insertChild(2);
jamil.insertChild(3);
jamil.insertChild(4);

class Logger {
  constructor() {
    this.values = [];
    this.log = this.log.bind(this);
  }
  log(value) {
    this.values.push(value);
  }
}

const logger = new Logger();
jamil.children[0].insertChild(2.1);
jamil.children[0].insertChild(2.2);
jamil.children[0].insertChild(2.3);
jamil.children[0].children[1].insertChild(2.21);
jamil.traverse(jamil, logger.log);
// console.log('logger.values', logger.values);
console.log('contains 1', jamil.contains(1));
console.log('contains 2', jamil.contains(2));
console.log('contains 2.21', jamil.contains(2.21));
console.log('contains 5', jamil.contains(5));
export default Tree;