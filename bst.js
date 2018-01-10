//Binary Search Tree- we are assuming we will not be getting duplicates.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    push(value) {
        const nodeToAdd = new Node(value);
        let currentNode = this.root;

        //if there is no root, then there are no nodes
        if (!currentNode) {
            this.root = nodeToAdd;
            return "Node added is the first node.";
        }

        /******** iteration way ********/
        // while(currentNode){
        //     if(value < currentNode.value){

        //         if(!currentNode.left){
        //             currentNode.left = nodeToAdd;
        //             return nodeToAdd;
        //         } else {
        //             currentNode = currentNode.left;
        //         }
        //     }else{
        //         if(!currentNode.right){
        //             currentNode.right=nodeToAdd;
        //             return nodeToAdd;
        //         }else{
        //             currentNode = currentNode.right;
        //         }
        //     }
        // }
        /*******************************/

        //recursive way
        let findNode = (value) => {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = nodeToAdd;
                    return nodeToAdd;
                } else {
                    currentNode = currentNode.left;
                    findNode(value);
                }
            } else {
                if (!currentNode.right) {
                    currentNode.right = nodeToAdd;
                    return nodeToAdd;
                } else {
                    currentNode = currentNode.right;
                    findNode(value);
                }
            }
        }

        findNode(value);
    }

    //get max height/depth of BST
    maxHeight(node) {
        let getHeight = (node) => {
            if (!node) {
                return 0;
            }
            let left = getHeight(node.left);
            let right = getHeight(node.right);
            return (Math.max(left, right) + 1);
        }

        if (!node) {
            node = this.root;
        }

        return getHeight(node);
    }

    //prints value of node
    printValue(node) {
        if (!node) {
            node = this.root;
        }

        return console.log(node.value);
    }

    //does a preorder traversal through BST and prints out each node value
    preorderTraversal(node) {
        let preorderPrint = (node) => {
            if (!node) {
                return "No tree.";
            }

            this.printValue(node);
            preorderPrint(node.left);
            preorderPrint(node.right);
        }

        if (!node) {
            node = this.root;
        }

        return preorderPrint(node);
    }

    //does an inorder traversal through BST and prints out each node value
    inorderTraversal(node) {
        let inorderPrint = (node) => {
            if (!node) {
                return "No tree.";
            }

            inorderPrint(node.left);
            this.printValue(node);
            inorderPrint(node.right);
        }

        if (!node) {
            node = this.root;
        }

        return inorderPrint(node);
    }

    //does a postorder traversal through BST and prints out each node value
    postorderTraversal(node) {
        let postorderPrint = (node) => {
            if (!node) {
                return "No tree.";
            }

            postorderPrint(node.left);
            postorderPrint(node.right);
            this.printValue(node);
        }

        if (!node) {
            node = this.root;
        }

        return postorderPrint(node);
    }

    //finds common ancestor of two values
    findAncestor(val1, val2) {
        let root = this.root;

        while (root) {
            if (val1 < root.value && val2 > root.value || val1 > root.value && val2 < root.value) {
                return root.value;
            } else if (val1 < root.value && val2 < root.value) {
                root = root.left;
            } else if (val1 > root.value && val2 > root.value) {
                root = root.right;
            }
        }

        return "No ancestor found";
    }
}

//LETS TEST IT!

//Making a new BST
let bst = new BST();
console.log("Create a BST:")
console.log(bst);
bst.push(4);
bst.push(2);
bst.push(5);
bst.push(3);
bst.push(1);
console.log("BST:");
console.log(bst);

console.log("Max Height/depth:");
console.log(bst.maxHeight());

console.log("Preorder Traversal:");
bst.preorderTraversal();

console.log("Inorder Traversal:");
bst.inorderTraversal();

console.log("Postorder Traversal:");
bst.postorderTraversal();

console.log("ancestor of 1 and 5:");
console.log(bst.findAncestor(1, 5));
console.log("ancestor of 5 and 1:");
console.log(bst.findAncestor(5, 1));
console.log("ancestor of 1 and 3:");
console.log(bst.findAncestor(1, 3));
