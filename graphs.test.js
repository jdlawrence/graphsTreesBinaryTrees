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

  test('should return a dummy value', () => {
    expect(graph.addNode()).toBe(5);
  });
});
