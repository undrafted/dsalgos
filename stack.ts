class Stack<T> {
  stack: T[] = [];

  push(item: T) {
    this.stack.push(item);
  }
  pop() {
    this.stack.pop();
  }

  peek() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    }
    return undefined;
  }
  length() {
    return this.stack.length;
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}

const myStack = new Stack<string>();
myStack.push("first");
console.log("enqueue: first");
console.log("peek:", myStack.peek());
console.log("length: ", myStack.length());
console.log("isEmpty: ", myStack.isEmpty());
myStack.push("second");
console.log("enqueue: second");
console.log("length: ", myStack.length());
console.log("peek: ", myStack.peek());
console.log("dequeue: ", myStack.pop());
console.log("peek: ", myStack.peek());
console.log("length: ", myStack.length());
console.log("dequeue: ", myStack.pop());
console.log("peek: ", myStack.peek());
console.log("length: ", myStack.length());
console.log("isEmpty: ", myStack.isEmpty());
