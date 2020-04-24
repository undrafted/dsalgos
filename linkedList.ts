class Node<T> {
  public data: T = null;
  public next: Node<T> = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class LinkedList<T> {
  private headNode: Node<T> = null;

  append(data: T) {
    const newNode = new Node(data);
    if (this.headNode === null) {
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  prepend(data: T) {
    const newHead = new Node(data);
    newHead.next = this.headNode;
    this.headNode = newHead;
  }

  deleteWithValue(data: T) {
    if (this.headNode === null) {
      return;
    }

    if (this.headNode.data === data) {
      this.headNode = this.headNode.next;
    }

    let current = this.headNode;
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  get(index: number) {
    if (this.headNode === null) {
      return;
    }

    if (index === 0) {
      return this.headNode.data;
    }

    let i = 1;
    let current = this.headNode.next;
    while (i < index) {
      if (current === null) {
        return;
      }
      current = current.next;
      i++;
    }

    if (current === null) {
      return;
    }
    return current.data;
  }

  head() {
    if (this.headNode == null) {
      return;
    }
    return this.headNode.data;
  }

  tail() {
    if (this.headNode === null) {
      return;
    }

    let current = this.headNode;
    while (current.next !== null) {
      current = current.next;
    }

    return current.data;
  }

  length() {
    let current = this.headNode;

    if (current === null) {
      return 0;
    }

    let count = 1;
    while (current.next) {
      count++;
      current = current.next;
    }

    return count;
  }

  isEmpty() {
    return this.headNode === null;
  }
}

const LL = new LinkedList<string>();

console.log(LL.head());
LL.append("a");
console.log(LL.head());
LL.prepend("b");
console.log(LL.head());
console.log(LL.tail());
LL.deleteWithValue("b");
console.log(LL.head());
console.log(LL.isEmpty());

const LL2 = new LinkedList<string>();
LL2.append("a");
LL2.append("b");
LL2.append("c");
console.log(LL2.get(2));
console.log(LL2.get(3));

const LL3 = new LinkedList<string>();
console.log(LL3.length());
LL3.append("a");
console.log(LL3.length());
LL3.append("a");
console.log(LL3.length());
