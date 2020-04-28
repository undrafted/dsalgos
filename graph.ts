import { Queue } from "./queue";

type NodeKey = string | number;
type VisitedObj = { [key in NodeKey]: any };

class Node {
  neigbors: Node[] = [];
  key: NodeKey;

  constructor(key: NodeKey) {
    this.key = key;
  }

  addNeighbor(node: Node) {
    this.neigbors.push(node);
  }
}

export class Graph {
  nodes: Node[] = [];
  edges: string[] = [];
  directed: boolean = false;

  constructor(directed: boolean = false) {
    this.directed = directed;
  }

  addNode(key: NodeKey): void {
    this.nodes.push(new Node(key));
  }

  getNode(key: NodeKey): Node {
    const node = this.nodes.find((n) => n.key === key);

    if (typeof node === "undefined") {
      throw new Error(`Node with key ${key} is not found!`);
    }

    return node;
  }

  addEdge(nodeKey1: NodeKey, nodeKey2: NodeKey): void {
    const node1 = this.getNode(nodeKey1);
    const node2 = this.getNode(nodeKey2);

    node1.addNeighbor(node2);
    this.edges.push(`${node1.key} => ${node2.key}`);

    if (!this.directed) {
      node2.addNeighbor(node1);
    }
  }

  print(): string {
    return this.nodes
      .map((n) => {
        const key = n.key;
        return `${key} => ${n.neigbors
          .map((neighbor) => neighbor.key)
          .join(" ")}`;
      })
      .join("\n");
  }

  getEdges(): string {
    return this.edges.join("\n");
  }

  breadthFirstSearch(startingNodeKey, visitCb) {
    const startingNode = this.getNode(startingNodeKey);

    const visited: VisitedObj = this.nodes.reduce((acc, node) => {
      acc[node.key] = false;
      return acc;
    }, {});

    const queue = new Queue<Node>();
    queue.enqueue(startingNode);

    while (!queue.isEmpty()) {
      const currentNode = queue.dequeue();
      if (!visited[currentNode.key]) {
        visitCb(currentNode);
        visited[currentNode.key] = true;
      }

      currentNode.neigbors.forEach((node) => {
        if (!visited[node.key]) {
          queue.enqueue(node);
        }
      });
    }
  }
}

// const graph = new Graph();
// graph.addNode("1");
// graph.addNode("2");
// graph.addNode("3");
// graph.addNode("4");
// graph.addEdge("1", "2");
// graph.addEdge("1", "3");
// graph.addEdge("3", "4");
// console.log(graph.print());
// console.log(graph.getEdges());

const graph = new Graph(true);
const nodes = ["Berlin", "Frankfurt", "Munich", "Dresden", "Bremen", "Hamburg"];
const edges = [
  ["Berlin", "Frankfurt"],
  ["Berlin", "Bremen"],
  ["Berlin", "Hamburg"],
  ["Frankfurt", "Dresden"],
  ["Frankfurt", "Bremen"],
  ["Munich", "Frankfurt"],
  ["Dresden", "Munich"],
  ["Dresden", "Bremen"],
];

nodes.forEach((node) => {
  graph.addNode(node);
});

edges.forEach((nodes) => {
  graph.addEdge(nodes[0], nodes[1]);
});

graph.breadthFirstSearch("Berlin", (node) => {
  console.log(node.key);
});
