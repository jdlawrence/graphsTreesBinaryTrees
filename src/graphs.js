class Graph {
  constructor() {
    this.nodes = [];
    this.adjList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjList[node] = [];
  }

  addEdge(node1, node2) {
    this.adjList[node1].push(node2);
    this.adjList[node2].push(node1);
  }

  removeNode(node) {
    // Remove the node from all edge lists
    Object.values(this.adjList).forEach(edgeList => {
      const edgeListIndex = edgeList.indexOf(node);
      if (edgeListIndex > -1) {
        edgeList.splice(edgeListIndex, 1);
      }
    });

    // Remove the node from the node list
    const nodeListIndex = this.nodes.indexOf(node);
    if (nodeListIndex > -1) {
      delete this.adjList[node];
      return this.nodes.splice(nodeListIndex, 1);
    }

    return false;
  }
}

let jamil = new Graph();
jamil.addNode(1);
jamil.addNode(2);
jamil.addNode(3);
jamil.addNode(4);
jamil.addNode(5);
jamil.addEdge(1, 2);
jamil.addEdge(1, 3);
jamil.addEdge(1, 4);
jamil.addEdge(1, 5);
jamil.addEdge(2, 3);
jamil.addEdge(2, 4);
jamil.addEdge(2, 5);
jamil.addEdge(3, 4);
jamil.addEdge(3, 5);
jamil.addEdge(4, 5);

console.log('before delete', jamil);
jamil.removeNode(3);
console.log('after delete', jamil);
jamil.addNode(3);

export default Graph;