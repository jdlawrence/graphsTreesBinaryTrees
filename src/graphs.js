class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = [];
  }
}

let jamil = new Graph();
jamil.addNode('akeem');
console.log('jamil', jamil);
export default Graph;