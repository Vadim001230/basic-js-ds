const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
 constructor() {
    this.queue = new ListNode()
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    let node = new ListNode(value)
    if (this.queue == null) {
      this.queue = node;
      return this.queue;
    } else {
      let current = this.queue;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      return this.queue;
    } 
  }

  dequeue() {
    let pow = this.queue.value;
    this.queue = this.queue.next;
    return pow;
  }
}

module.exports = {
  Queue
};
