// class to create nodes
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// class to create a singly linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  remove(value) {
    if (!this.head) {
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.size--;
        return;
      }
      current = current.next;
    }
  }
}

// method to add a node at the end of the linked list
// LinkedList.prototype.append = function (value) {
//   const newNode = new Node(value);
//   if (this.head === null) {
//     this.head = newNode;
//   } else {
//     let currentNode = this.head;
//     while (currentNode.next !== null) {
//       currentNode = currentNode.next;
//     }
//     currentNode.next = newNode;
//   }
//   this.size++;
// };
