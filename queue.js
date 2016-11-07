class Queue {
  constructor() {
    this.storage = {};
    this.start = -1;
    this.end = -1;
  }

  size() {
    return this.end - this.start;
  }

  enqueue(value) {
    this.storage[++this.end] = value;
  }

  dequeue() {
    if (this.size()) {
      let first = this.storage[++this.start];
      delete this.storage[this.start];
      if (!this.size()) {
        this.start = -1;
        this.end = -1;
      }
      return first;
    }
  }

}
