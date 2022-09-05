// rear -> put
// front -> get

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

const q = new Queue();

q.enqueue(3);

console.log(q);

q.dequeue();

console.log(q);

console.log(q.peek());
console.log(q.szie());
