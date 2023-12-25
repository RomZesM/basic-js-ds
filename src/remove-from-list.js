const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let head = l;
  let prev = null;
  let current = head;
  while(current != null){
   // console.log(current.value);
    if(current.value === k){
      //for removing first element
      if(prev === null){
        head = current.next
        } 
      else
        prev.next = current.next  //remove current node
    }
    else{
      prev = current;
    }
    current = current.next; //go to next node
    
  }
  return head
}

module.exports = {
  removeKFromList
};


//------

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

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


// let l  = convertArrayToList([1,1,2,3,4,5,6,7])
// printLinkedList(l)

// printLinkedList(removeKFromList(l, 1))



