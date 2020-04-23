class Queue<T> {
  private queue: T[] = [];

  enqueue(item: T): void {
    this.queue.unshift(item);
  }

  dequeue(): T {
    return this.queue.pop();
  }

  peek(): T | undefined {
    const l = this.queue.length;

    if (l < 1) {
      return undefined;
    }

    return this.queue[l - 1];
  }

  length(): number {
    return this.queue.length;
  }
}

const myQueue = new Queue<string>();
console.log("enqueue:", myQueue.enqueue("a"));
console.log("peek:", myQueue.peek());
console.log("length: ", myQueue.length());
console.log("enqueue:", myQueue.enqueue("b"));
console.log("length: ", myQueue.length());
console.log("dequeue: ", myQueue.dequeue());
console.log("peek: ", myQueue.peek());
console.log("length: ", myQueue.length());
console.log("dequeue: ", myQueue.dequeue());
console.log("peek: ", myQueue.peek());
console.log("length: ", myQueue.length());
