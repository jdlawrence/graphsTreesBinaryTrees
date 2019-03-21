# graphs, trees, and binary trees Exercises
An exploration of several data structures

To locally:

1) Clone the repo from github.
2) Run `yarn` or `npm install` to install all packages from the package.json.
3) Install `jest` globally by running `npm install jest -g`.
4) Run tests by running `jest --watch`.
5) If you wish to use the Chrome debugger, run `yarn start`. This will open up a Chrome tab where you can inspect and use the debugger tools. You can create instances of the classes in the `src` folder files.
For example: In `/src/graphs.js`, you can create a graph instance like:
```javascript
let graphInstance = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addEdge(1, 2);
graph.addEdge(1, 3)
```
6) Check out solutions in `/solutions` folder. There are many ways to implement the methods in each of
the data structure classes, but these are generally what I found easiest.