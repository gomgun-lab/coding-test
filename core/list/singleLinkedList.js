class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  insert(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let temp = this.head;
      this.head = new Node(value);
      this.head.next = temp;
    }
    this.size++;
  }

  remove(value) {
    let curHead = this.head;
    if (!curHead.data) {
      console.log("빈 리스트입니다.");
      return;
    }

    if (curHead.data === value) {
      this.head = curHead.next;
      this.size--;
    } else {
      let prev = curHead;
      while (curHead.next) {
        if (curHead.data == value) {
          prev.next = curHead.next;
          prev = curHead;
          curHead = curHead.next;
          break;
        }
        prev = curHead;
        curHead = curHead.next;
      }
      if (curHead.data === value) {
        prev.next = null;
      }
      this.size--;
    }
  }

  show() {
    let curhead = this.head;
    let size = this.size;
    while (size > 0) {
      // process.stdout.write **only node available**
      process.stdout.write(curhead.data + " ");
      curhead = curhead.next;
      size--;
    }
  }
}

var SLL = new SingleLinkedList();
SLL.insert(1);
SLL.insert(2);
SLL.insert(1);
SLL.insert(1);
SLL.insert(1);
SLL.show();
console.log("");
SLL.remove(1);
SLL.remove(1);
SLL.remove(1);
SLL.remove(2);
SLL.remove(1);
SLL.remove(1);
SLL.show();
