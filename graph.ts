class Node<T> {
  neigbors: Node<T>[] = [];
  key: T;

  constructor(key: T) {
    this.key = key;
  }

  addNeighbor(node: Node<T>) {
    this.neigbors.push(node);
  }
}

export class Graph<T> {
  nodes: Node<T>[] = [];
  edges: string[] = [];
  directed: boolean = false;

  constructor(directed: boolean = false) {
    this.directed = directed;
  }

  addNode(key: T): void {
    this.nodes.push(new Node(key));
  }

  getNode(key: T): Node<T> {
    const node = this.nodes.find((n) => n.key === key);

    if (typeof node === "undefined") {
      throw new Error(`Node with key ${key} is not found!`);
    }

    return node;
  }

  addEdge(nodeKey1: T, nodeKey2: T): void {
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
}

const graph = new Graph();
graph.addNode("1");
graph.addNode("2");
graph.addNode("3");
graph.addNode("4");
graph.addEdge("1", "2");
graph.addEdge("1", "3");
graph.addEdge("3", "4");
console.log(graph.print());
console.log(graph.getEdges());
