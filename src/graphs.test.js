import Graph from './graphs';

let graph;
beforeEach(() => {
  graph = new Graph();
});

test('it should be a function', () => {
  expect(typeof Graph).toBe('function');
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