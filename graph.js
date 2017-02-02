class Graph {

    constructor(verticles=[], edges=[], numberOfEdges) {
        this.verticles = verticles;
        this.edges = edges;
        this.numberOfEdges = 0;
    }

    addVerticle(vertex) {
        this.edges[vertex] = [];
        this.verticles = [...this.verticles, vertex];
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
     }
}