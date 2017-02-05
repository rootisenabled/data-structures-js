// Here the Queue is implemented using JS arrays for the sake of simplicity

class Queue {
  constructor(items) {
    this.items = [];
  }

  enqueue(item) {
    this.items = [...this.items, item];
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length == 0;
  }
}

/*
 * Performs a breadth-first search on a graph
 * @param {array} graph - Graph, represented as adjacency lists.
 * @param {number} sourceVertex - The index of the source vertex.
 * @returns {array} Array of objects describing each vertex, like
 *     [{distance: _, predecessor: _ }]
 */

const doBFS = (graph, sourceVertex) => {
  let bfsResults = [];

  bfsResults.forEach(elem => {
    elem = {
      distance: null,
      predecessor: null
    }
  })

  bfsResults[sourceVertex].distance = 0;

  let queue = new Queue();
  queue.enqueue(sourceVertex);

  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();

    for (let u = 0; u < graph[vertex].length; u++) {
      let neighbor = graph[vertex][u];

      if (bfsResults[neighbor].distance === null) {

        bfsResults[neighbor].distance = bfsResults[vertex].distance + 1;
        bfsResults[neighbor].predecessor = vertex;
        queue.enqueue(neighbor);
      }
    }
  }

  return bfsResults;
}