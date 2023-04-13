const { NotImplementedError } = require("../extensions/index.js");

const { Node: TreeNode } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null; // Initialize the root node
  }

  root() {
    return this.rootNode; // Return the root node
  }

  add(data) {
    const newNode = new TreeNode(data); // Create new node

    if (!this.rootNode) {
      this.rootNode = newNode; // Set root node if it's empty
      return;
    }

    let currentNode = this.rootNode;

    while (currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode; // Add new node to the left
          break;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode; // Add new node to the right
          break;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return true; // Return true if the data is found
      }

      currentNode =
        data < currentNode.data ? currentNode.left : currentNode.right;
    }

    return false; // Return false if the data is not found
  }

  find(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode; // Return the node if the data is found
      }

      currentNode =
        data < currentNode.data ? currentNode.left : currentNode.right;
    }

    return null; // Return null if the data is not found
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null; // Remove the node if it has no children
      }

      if (node.left === null) {
        return node.right; // Remove the node and return its right child
      } else if (node.right === null) {
        return node.left; // Remove the node and return its left child
      }

      const minRightNode = this.findMinNode(node.right);
      node.data = minRightNode.data;
      node.right = this.removeNode(node.right, minRightNode.data);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node; // Return the node with minimum value
    } else {
      return this.findMinNode(node.left);
    }
  }

  min() {
    let currentNode = this.rootNode;

    if (!currentNode) {
      return null;
    }

    while (currentNode.left) {
      currentNode = currentNode.left; // Traverse to the leftmost node
    }

    return currentNode.data; // Return the minimum value
  }

  max() {
    let currentNode = this.rootNode;

    if (!currentNode) {
      return null;
    }

    while (currentNode.right) {
      currentNode = currentNode.right; // Traverse to the rightmost node
    }

    return currentNode.data; // Return the maximum value
  }
}

module.exports = {
  BinarySearchTree,
};
