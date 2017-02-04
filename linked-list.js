/*
	Main class for creating linked list instances
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /*
  	@returns {number} Keeping a track of a list size
   */
  size() {
    return this.size;
  }

  /*
  	
   */
  contains(value) {
    let node = this.head;
    while (node) {
      if (node.value == value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = this.head;
    } else if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.size++;
  }

  insertAfter(index, value) {
    let current = this.head;
    while (current) {
    	if ( current.value === value ) {
    		let node = new Node(value);
    		if ( current == this.tail) {
    			this.tail.next = node;
    			this.tail = node;
    		} else {
    			node.next = current.next;
    			current.next = node;
    		}
    		this.size++;
    	}
      current = current.next;
    }
  }

  remove(value) {
  	let current = this.head;
  	let previous = this.head;

  	while(current) {
  		if (current.value === value) {
  			if (this.head == current) {
  				this.head = this.head.next;
  				this.length--;
  				return;
  			}
  			if (this.tail == current) {
  				this.tail = previous;
  			}
  			previous.next = current.next;
  			this.length--;
  			return;
  		}
  		previous = current;
  		current = current.next;
  	}
  }
  
}

/*
	Helper class for creating nodes for Linked List
 */
class Node {
	/*
		Create a node
		@param {any} value
	 */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
