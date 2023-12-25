const { NotImplementedError, ListNode } = require('../extensions/index.js');

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
  head = null;
  last = null;
  getUnderlyingList() {
   return this.head;
  }

  enqueue(value) {
   let node = new ListNode(value);
   if(this.head === null){
    this.head = node;
    this.last = this.head;
   }
   else{
    //add node to the linkedlist
    this.last.next = node;
    this.last = node;
   }
  }

  dequeue() {
    let ret = this.head.value;
    this.head = this.head.next;
    return ret;
  }
}

module.exports = {
  Queue
};


function printLinkedList(list){
  let head = list;
  let current = head;
  let arr = []
  while(current != null){
    arr.push(current.value)
    current = current.next;
  }
  console.log(arr);
}

// let q = new Queue;
// q.enqueue(5);
// q.enqueue(6);
// q.enqueue(7);
// q.enqueue(8);
// printLinkedList(q.head)
// console.log(q.dequeue());
// printLinkedList(q.head)