import graph from './graphs';

console.log('graph', graph);

test('adds 1 + 2 to equal 3', () => {
  const graphInstance = new graph();
  expect(graphInstance.addNode()).toBe(3);
});

// const sum = require('./graphs');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });