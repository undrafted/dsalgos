import { Queue } from "./queue";

class PriorityQueue<T> {
  private lowPriorityQueue = new Queue<T>();
  private highPriorityQueue = new Queue<T>();

  enqueue(item: T, isHighPriority = false): void {
    if (isHighPriority) {
      this.highPriorityQueue.enqueue(item);
    } else {
      this.lowPriorityQueue.enqueue(item);
    }
  }

  dequeue(): T {
    if (!this.highPriorityQueue.isEmpty()) {
      return this.highPriorityQueue.dequeue();
    }
    return this.lowPriorityQueue.dequeue();
  }

  peek(): T | undefined {
    if (!this.highPriorityQueue.isEmpty()) {
      return this.highPriorityQueue.peek();
    }
    return this.lowPriorityQueue.peek();
  }

  length(): number {
    return this.highPriorityQueue.length() + this.lowPriorityQueue.length();
  }

  isEmpty(): boolean {
    return (
      this.highPriorityQueue.length() + this.lowPriorityQueue.length() === 0
    );
  }
}

// const myQueue = new PriorityQueue<string>();
// myQueue.enqueue("a");
// console.log("enqueue: a");
// console.log("peek:", myQueue.peek());
// console.log("length: ", myQueue.length());
// console.log("isEmpty: ", myQueue.isEmpty());
// myQueue.enqueue("b", true);
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
