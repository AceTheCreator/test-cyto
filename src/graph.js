class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parents = [];
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  addNode(value) {
    const node = new Node(value);
    this.nodes.add(node);
    return node;
  }

  addEdge(parentNode, childNode) {
    parentNode.children.push(childNode);
    childNode.parents.push(parentNode);
  }

  layout() {
    // Determine the root nodes of the graph
    const rootNodes = this.getRootNodes();
    // Initialize the coordinates of the root nodes
    rootNodes.forEach((node, index) => {
      node.x = index * 200;
      node.y = 0;
    });
    // Layout the rest of the nodes
    this.layoutNodes({ nodes: rootNodes });
  }

  layoutNodes({ nodes, visitedNodeIds = [], isRecCall }) {
    const children = [];
    for (const node of nodes) {
      if (isRecCall && visitedNodeIds.includes(node.value.id)) return;

      visitedNodeIds.push(node.value.id);
      children.push(...node.children);
      if (node.children.length > 0) {
        // Calculate the x coordinate of each child node
        const childWidth = 400;
        const x = node.x - ((node.children.length - 1) * childWidth) / 2;
        node.children.forEach((child, index) => {
          child.x = x + index * childWidth;
          child.y = node.y + 100;
        });
        // Recursively layout the child nodes
        this.layoutNodes({
          nodes: node.children,
          visitedNodeIds,
          isRecCall: true
        });
      }
    }
  }

  getRootNodes() {
    const rootNodes = [];
    for (const node of this.nodes) {
      if (node.parents.length === 0) {
        rootNodes.push(node);
      }
    }
    return rootNodes;
  }
}

export default Graph;
