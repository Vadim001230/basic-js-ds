const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.nodeRoot = null;
  }

  root() {
    return this.nodeRoot;
  }

  add(data) {
    this.nodeRoot = addNode(this.nodeRoot, data);
    function addNode(node, data) {
      if (!node) {
        return {
          data: data,
          left: null,
          right: null
        };
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return search(this.nodeRoot, data);

    function search(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (node.data > data) {
        return search(node.left, data);
      } else {
        return search(node.right, data);
      }
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    return findMin(this.nodeRoot);
    function findMin(node) {
      if (!node) {
        return null;
      }
      if (!node.left) {
        return node.data;
      }
      return findMin(node.left);
    }
  }

  max() {
    return findMax(this.nodeRoot);
    function findMax(node) {
      if (!node) {
        return null;
      }
      if (!node.right) {
        return node.data;
      }
      return findMax(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};