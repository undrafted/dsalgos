export class Queue<T> {
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

  isEmpty(): boolean {
    return this.queue.length === 0;
  }
}

// const myQueue = new Queue<string>();
// myQueue.enqueue("a");
// console.log("enqueue: a");
// console.log("peek:", myQueue.peek());
// console.log("length: ", myQueue.length());
// console.log("isEmpty: ", myQueue.isEmpty());
// myQueue.enqueue("b");
// console.log("enqueue: b");
// console.log("length: ", myQueue.length());
// console.log("peek: ", myQueue.peek());
// console.log("dequeue: ", myQueue.dequeue());
// console.log("peek: ", myQueue.peek());
// console.log("length: ", myQueue.length());
// console.log("dequeue: ", myQueue.dequeue());
// console.log("peek: ", myQueue.peek());
// console.log("length: ", myQueue.length());
// console.log("isEmpty: ", myQueue.isEmpty());
