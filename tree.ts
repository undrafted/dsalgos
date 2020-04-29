type NodeKey = string | number;

class Node {
  key: NodeKey;
  children: Node[] = [];

  constructor(key: NodeKey) {
    this.key = key;
  }
  addChild(key: NodeKey) {
    const node = new Node(key);
    this.children.push(node);
    return node;
  }
}

export class Tree {
  root: Node;

  constructor(rootNodeKey: NodeKey) {
    this.root = new Node(rootNodeKey);
  }

  print() {
    let result = "";

    const traverse = (
      node: Node,
      visitFn: (node: Node, depth: number) => void,
      depth: number = 1
    ) => {
      visitFn(node, depth);
      if (node.children.length) {
        node.children.forEach((c) => {
          traverse(c, visitFn, depth + 1);
        });
      }
    };

    const addKeyToResult = (node: Node, depth: number) => {
      result +=
        result.length === 0
          ? node.key
          : `\n${" ".repeat(depth * 2)}${node.key}`;
    };

    traverse(this.root, addKeyToResult, 1);
    return result;
  }
}

const dom = new Tree("html");
const head = dom.root.addChild("head");
const body = dom.root.addChild("body");
const title = head.addChild("title");
const header = body.addChild("header");
const h1 = header.addChild("h1 - Header");
const main = body.addChild("main");
const p = main.addChild("p - Paragraph");
const footer = body.addChild("footer");
const cp = footer.addChild("copyright");

console.log(dom.print());
