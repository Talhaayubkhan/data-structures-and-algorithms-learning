class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addToHead(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addToTail(val) {
    // handle corner case here, what if head -> null
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
    } else {
      // head -> 1 -> 2 -> 3 -> 4 -> null
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.size++;
  }
}
