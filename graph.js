class Graph {

    constructor(verticles, edges, numberOfEdges) {
        this.verticles = [];
        this.edges = {};
        this.numberOfEdges = 0;
    }

    addVerticle(vertex) {
        this.verticles = [...this.verticles, vertex];
        this.edges[vertex] = [];
    }

    addEdge(v1, v2) {
        this.edges[v1] = [...this.edges[v1], v2];
        this.edges[v2] = [...this.edges[v2], v1];
        this.numberOfEdges++;
    }

    removeVerticle(vertex) {
        let index = this.verticles.indexOf(vertex);
        if (~index)
            this.verticles = this.verticles.filter((el, i) => i !== index);
        while (this.edges[vertex].length) {
            let adjacentVertex = this.edges[vertex].pop();
            this.removeEdge(adjacentVertex, vertex);
        }
    }

    removeEdge(v1, v2) {
        let index1 = this.edges[v1] ? this.edges[v1].indexOf(v2) : -1;
        let index2 = this.edges[v2] ? this.edges[v2].indexOf(v1) : -1;

        if (~index1) {
            this.edges[v1].splice(index2, 1);
            this.numberOfEdges--;
        }
        if (~index2) {
            this.edges[v2].splice(index1, 1);
        }
    }

    contains(vertex) {
        return !!this.verticles[vertex];
    }
}