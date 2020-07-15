
/* We want to build a Node class and a BinaryTree class
  The instatiated node class object should have a data key and left and right keys
  the BinaryTree class should have the following methods: addNode, hasNode, deleteNode
  the BinaryTree class should have a root key which points at a Node object.
  the following rules must be true: 
      the tree must be "ordered"
*/



// [1,2,3,4,5,6,7] 
//            4 is the root
//           / \
//          3   5
//         /    \
//        2     6

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
}

let node1 = new Node(5);
let node2 = new Node(3);
let node3 = new Node(8);
let node4 = new Node(4);

let ourTree = new BinaryTree(node1);

ourTree.addNode(node2);
console.log(node1.data);
ourTree.addNode(node3);
console.log(ourTree.rootNode);
ourTree.addNode(node4);
console.log(ourTree.rootNode);


