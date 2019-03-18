import Graph from '../src/graphs';
import Logger from './logger';

let graph;
let logger;

beforeEach(() => {
  graph = new Graph();
});

test('it should be a function', () => {
  expect(typeof Graph).toBe('function');
});

test('should have an "adjList" property', () => {
  expect(graph.hasOwnProperty('adjList')).toBe(true);
});

describe('the addNode function', () => {
  test('should be a function', () => {
    expect(typeof graph.addNode).toBe('function');
  });

  test('should add a new node to nodes array', () => {
    graph.addNode(2);
    expect(graph.nodes.indexOf(2) > -1).toBe(true);
  });

  test('should add an empty array for the nodes adjacency list', () => {
    graph.addNode(2);
    expect(graph.adjList[2]).toEqual([]);
  });
});

describe('the removeNode function', () => {
  beforeEach(() => {
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.removeNode(2);
  });

  afterEach(() => {
    graph = new Graph();
  });

  test('should be a function', () => {
    expect(typeof graph.removeNode).toBe('function');
  });

  test('should remove an existing node from the nodes array', () => {
    expect(graph.nodes.includes(2)).toBe(false);
  });

  test('should remove the node from adjLists of all its neighbors', () => {
    expect(graph.adjList[1].includes(2)).toBe(false);
    expect(graph.adjList[3].includes(2)).toBe(false);
  });

  test('should remove the adjacency list for removed node', () => {
    expect(graph.adjList[2]).toBe(undefined);
  });
});

describe('the removeEdge function', () => {
  beforeEach(() => {
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
  });

  afterEach(() => {
    graph = new Graph();
  });

  test('should be a function', () => {
    expect(typeof graph.removeEdge).toBe('function');
  });

  test('should remove an existing node from the nodes array', () => {
    graph.removeEdge(1, 2);
    expect(graph.adjList[1].includes(2)).toBe(false);
    expect(graph.adjList[2].includes(1)).toBe(false);
  });

  test('should return an error message when the indices are not valid', () => {
    expect(graph.removeEdge(1, 5)).toEqual('Please pass in valid indices');
    expect(graph.removeEdge(7, 2)).toEqual('Please pass in valid indices');
  });
});


describe('the depth first traversal function', () => {
  beforeEach(() => {
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(1, 3);
    graph.addEdge(3, 4);
    graph.addEdge(4, 5);

    logger = new Logger();
  });

  afterEach(() => {
    graph = new Graph();
  });

  test('should be a function', () => {
    expect(typeof graph.depthFirstTraversal).toBe('function');
  });

  test('should return a warning when a starting node is not provided', () => {
    expect(graph.depthFirstTraversal()).toEqual('No starting node was provided');
  });

  test('should return nodes on opposite ends in a nonsecutive order', () => {
    // Do a depth first traversal and log the result the logger class to store the result
    graph.depthFirstTraversal(1, logger.log);

    const nodeOnOneEnd = logger.values.indexOf(3);
    const nodeOnOtherEnd = logger.values.indexOf(5);
    const distance = Math.abs(nodeOnOneEnd - nodeOnOtherEnd);

    expect(distance).toBeGreaterThanOrEqual(2);
  });
});

describe('the breadth first traversal function', () => {
  beforeEach(() => {
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(1, 3);
    graph.addEdge(3, 4);
    graph.addEdge(4, 5);

    logger = new Logger();
  });

  afterEach(() => {
    graph = new Graph();
  });

  test('should be a function', () => {
    expect(typeof graph.breadthFirstTraversal).toBe('function');
  });

  test('should return a warning when a starting node is not provided', () => {
    expect(graph.breadthFirstTraversal()).toEqual('No starting node was provided');
  });

  test('should return nodes the same distance from starting consecutively', () => {
    // Do a depth first traversal and log the result the logger class to store the result
    graph.depthFirstTraversal(1, logger.log);

    const nodeOnOneEnd = logger.values.indexOf(3);
    const nodeOnOtherEnd = logger.values.indexOf(5);
    const distance = Math.abs(nodeOnOneEnd - nodeOnOtherEnd);

    expect(distance).toBeGreaterThanOrEqual(1);
  });
});