class Queue {
  constructor() {
    this.queue = [];
    this.rear = 0;
    this.front = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const temp = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return temp;
  }

  peek() {
    return this.queue[this.front];
  }

  isHighest() {
    return this.queue.some((elem) => this.front >= elem);
  }

  size() {
    return this.queue.length;
  }
}

function solution(priorities, location) {
  const q = new Queue();

  for (let i = 0; i < priorities.length; i++) {
    q.enqueue([priorities[i], i]);
  }

  let count = 0;
  priorities.sort((a, b) => b - a);

  while (true) {
    const curValue = q.peek();
    if (curValue[0] >= priorities[count]) {
      q.dequeue();
      count++;
      if (location === curValue[1]) {
        return count;
      }
    } else {
      q.enqueue(q.dequeue());
    }
  }
}
