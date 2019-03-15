class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  insertChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
  }
  traverse(tree, func = console.log) {
    func(tree.value);
    tree.children.forEach(child => {
      this.traverse(child);
    });
  }
}

const jamil = new Tree(1);
jamil.insertChild(2);
jamil.insertChild(3);
jamil.insertChild(4);

class Logger {
  constructor() {
    this.values = [];
  }
  log(value) {
    this.values.push(value);
  }
}

const logger = new Logger();
jamil.children[0].insertChild(2.1);
jamil.children[0].insertChild(2.2);
jamil.children[0].insertChild(2.3);
const result = [];
jamil.traverse(jamil, logger.log.bind(logger));
console.log(logger.values);
export default Tree;