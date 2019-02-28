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

  test('Should add a new node to nodes array', () => {
    graph.addNode(2);
    expect(graph.nodes.indexOf(2) > -1).toBe(true);
  });
});
