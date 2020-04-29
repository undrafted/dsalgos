type NodeKey = string | number;

class Node {
  key: NodeKey;
  left: Node;
  right: Node;

  constructor(key: NodeKey) {
    this.key = key;
  }

  addLeft(key: NodeKey) {
    this.left = new Node(key);
    return this.left;
  }

  addRight(key: NodeKey) {
    this.right = new Node(key);
    return this.right;
  }
}

enum TRAVERSAL {
  IN_ORDER = "IN_ORDER",
  PRE_ORDER = "PRE_ORDER",
  POST_ORDER = "POST_ORDER",
}

export class BinaryTree {
  root: Node;

  constructor(key: NodeKey) {
    this.root = new Node(key);
  }

  traverse(traversal: TRAVERSAL, node: Node, visitFn: (node: Node) => void) {
    if (!node) {
      return;
    }

    if (traversal === TRAVERSAL.IN_ORDER) {
      this.traverse(TRAVERSAL.IN_ORDER, node.left, visitFn);
      visitFn(node);
      this.traverse(TRAVERSAL.IN_ORDER, node.right, visitFn);
    }

    if (traversal === TRAVERSAL.PRE_ORDER) {
      visitFn(node);
      this.traverse(TRAVERSAL.PRE_ORDER, node.left, visitFn);
      this.traverse(TRAVERSAL.PRE_ORDER, node.right, visitFn);
    }

    if (traversal === TRAVERSAL.POST_ORDER) {
      this.traverse(TRAVERSAL.POST_ORDER, node.left, visitFn);
      this.traverse(TRAVERSAL.POST_ORDER, node.right, visitFn);
      visitFn(node);
    }
  }

  print(traversal: TRAVERSAL = TRAVERSAL.IN_ORDER) {
    let result = "";

    const visitFn = (node: Node) =>
      (result += result.length === 0 ? node.key : ` => ${node.key}`);

    this.traverse(traversal, this.root, visitFn);

    return result;
  }
}

const tree = new BinaryTree("a");
const b = tree.root.addLeft("b");
const c = tree.root.addRight("c");
const d = b.addLeft("d");
const e = b.addRight("e");
const f = c.addLeft("f");
const g = c.addRight("g");
const h = d.addLeft("h");
const i = d.addRight("i");
console.log("IN ORDER TRAVERSAL");
console.log(tree.print());
console.log("PRE ORDER TRAVERSAL");
console.log(tree.print(TRAVERSAL.PRE_ORDER));
console.log("POST ORDER TRAVERSAL");
console.log(tree.print(TRAVERSAL.POST_ORDER));
