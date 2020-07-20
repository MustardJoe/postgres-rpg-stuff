
/* We want to build a Node class and a BinaryTree class
  The instatiated node class object should have a data key and left and right keys
  the BinaryTree class should have the following methods: addNode, hasNode, deleteNode
  the BinaryTree class should have a root key which points at a Node object.
  the following rules must be true: 
      the tree must be "ordered"
*/




// [1,2,3,4,5,6,7] 
//            4 is the root
//           /  \
//          3    5
//         / \    \
//        2   3.5  6
//       /         \
//      1           7

/*
newNode: data = 7


*/




class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }  
}

class BinaryTree {
  constructor(rootNode) {
    this.rootNode = rootNode;
    this.addNode = this.addNode.bind(this);
    this.hasNode = this.hasNode.bind(this);
  }

  addNode(node, parentNode = this.rootNode) {
    if(node.data >= parentNode.data) {
      if(!parentNode.right) {
        parentNode.right = node;
        return node;
      } else {
        return this.addNode(node, parentNode.right);
      }
    } 
    else {
      if(!parentNode.left) {
        parentNode.left = node;
        return node;
      }
      else {
        return this.addNode(node, parentNode.left);
      }
    }  
  }

  hasNode(possibleData, currentNode = this.rootNode) {
    let result = false;

    //compare possibleData agaisnt currentNode.data
    //if possibleData and currentNode are same, return true

    //check if we are on a leaf, if on leaf and data not the same, return false

    //if two nodes not the same && not on leaf
    
    //IF only left child, :check if left child of currentNode
    //if left child, run recursion call on that node

    //If only right child
    //run recursion on right side

    //IF left and right child
    // return this.hasNode(left) || this.hasNode(right)


    if(possibleData === currentNode.data) {
      return true;
    }
    if(currentNode.left === undefined && currentNode.right === undefined) {
      return false;
    }

    else if(currentNode.right === undefined){
      return this.hasNode(possibleData, currentNode.left);
    }

    else if(currentNode.left === undefined){
      return this.hasNode(possibleData, currentNode.right);
    }

    else {
      return this.hasNode(possibleData, currentNode.left) || this.hasNode(possibleData, currentNode.right);
    }   
  }

  deleteNode(data, currentNode = this.rootNode) {
    if(!this.hasNode(data)) return;

    if(currentNode.left.data === data) {
      let child = currentNode.left;
      currentNode.left = undefined;
      if(child.left) {
        this.addNode(child.left);
      }
      if(child.right) {
        this.addNode(child.right);
      }
      return;
    }

    if(currentNode.right === data) {
      let child = currentNode.right;
      currentNode.right = undefined;
      if(child.left) {
        this.addNode(child.left);
      }
      if(child.right) {
        this.addNode(child.right);
      }
      return;
      }
    }

    //find parent of node we are looking to delete and hang on to that info

    //possible store child data before pointer is gone
    //delete pointer to node being deleted (from parent)

    //recursively add back the child nodes 








    //search through tree and delete node
    if(node.left === undefined && node.right === undefined) {
      node === undefined;
    }
    if(node.left) {
      this.deleteNode(node.left);
    }
    if(node.right) {
      this.deleteNode(node.right);
    }
  }
}

let node1 = new Node(5);
let node2 = new Node(3);
let node3 = new Node(8);
let node4 = new Node(4);
let node5 = new Node(-10);
let node6 = new Node(33);
let node7 = new Node(21);
let node8 = new Node(7.6665);
// console.log('node2', node2);

let ourTree = new BinaryTree(node1);

ourTree.addNode(node2);
// console.log(node1.data);
ourTree.addNode(node3);
// console.log(ourTree.rootNode);
ourTree.addNode(node4);
ourTree.addNode(node5);
ourTree.addNode(node6);
ourTree.addNode(node7);
ourTree.addNode(node8);
/* eslint-disable-next-line no-console */
// console.log('Tree, after node insterts', ourTree.rootNode);
/* eslint-disable-next-line no-console */
// console.log(`
//   -------------------------------------
//   console.logging node2: ${node2}
// `);
// console.log('dofferent node 2, but actually the same', node2);
console.log(ourTree);
console.log(ourTree.hasNode(3));

console.log(ourTree.hasNode(4000));


