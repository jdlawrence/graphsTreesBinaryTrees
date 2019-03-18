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

  removeEdge(node1, node2) {
    const indexOfNode2 = this.adjList[node1] && this.adjList[node1].indexOf(node2);
    const indexOfNode1 = this.adjList[node2] && this.adjList[node2].indexOf(node1);

    const badIndices = this.adjList[node1] === undefined || this.adjList[node2] === undefined;

    if (badIndices) {
      return 'Please pass in valid indices';
    } else {
      this.adjList[node1].splice(indexOfNode2, 1);
      this.adjList[node2].splice(indexOfNode1, 1);
    }
  }

  depthFirstTraversal(startingNode, func = console.log) {
    if (startingNode === undefined) {
      return 'No starting node was provided';
    }
    let nodeStack = [];
    let visitedArr = [];

    nodeStack.push(startingNode);
    visitedArr[startingNode] = true;

    while (nodeStack.length) {
      const current = nodeStack.pop();
      const neighbors = this.adjList[current];
      func(current);

      neighbors.forEach(neighbor => {
        if (!visitedArr[neighbor]) {
          nodeStack.push(neighbor);
          visitedArr[neighbor] = true;
        }
      });
    }
  }

  breadthFirstTraversal(startingNode, func = console.log) {
    if (startingNode === undefined) {
      return 'No starting node was provided';
    }

    let nodeStack = [];
    let visitedArr = [];

    nodeStack.push(startingNode);
    visitedArr[startingNode] = true;

    while (nodeStack.length) {
      const current = nodeStack.shift();
      const neighbors = this.adjList[current];
      func(current);

      neighbors.forEach(neighbor => {
        if (!visitedArr[neighbor]) {
          nodeStack.push(neighbor);
          visitedArr[neighbor] = true;
        }
      });
    }
  }
}

export default Graph;