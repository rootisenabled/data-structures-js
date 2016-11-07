class Stack {
  constructor() {
    this.storage = {};
    this.position = -1; //to mimicate array behaviour
  }

  top() {
    return this.position;
  }

  push(value) {
    this.storage[++this.position] = value;
    return value;
  }

  pop() {
    if (this.position > 1) {
      let top = this.storage[this.position];
      delete this.storage[this.position];
      this.position--;
      return top;
    }
  }
}
