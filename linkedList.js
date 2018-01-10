//Make a linkedlist

//makes a node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//makes a linked list container
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(data) {

        const nodeToAdd = new Node(data);
        let nodeToCheck = this.head;

        //check to see if there are no nodes
        if (!nodeToCheck) {
            this.head = nodeToAdd;
            this.length++;
            return "Linked list does not exist.  Node added as first node.";
        }

        while (nodeToCheck.next) {
            nodeToCheck = nodeToCheck.next;
        }

        nodeToCheck.next = nodeToAdd;
        this.length++;
        return nodeToAdd;
    }

    get(val) {
        let nodeToCheck = this.head;

        let count = 0;
        while (count < this.length) {
            if (nodeToCheck.data == val) {
                return nodeToCheck;
            }

            nodeToCheck = nodeToCheck.next;
            count++;
        };

        return "Node does not exist";
    }

    delete(val) {
        let currentNode = this.head;

        //check to see if there are any nodes
        if (!currentNode) {
            return "There are no nodes.";
        }

        //head is the value to delete
        if (currentNode.data == val) {
            //head has another node after it:
            if (currentNode.next) {
                this.head = currentNode.next;
                this.length--;
                return "Head Node deleted" + currentNode;
            } else {
                //head is the only node:
                this.head = null;
                this.length--;
                return "Only Node deleted" + currentNode;
            }
        }

        //Node is in the middle of the list.
        let previousNode = currentNode;

        while (currentNode.next) {

            if (currentNode.data == val) {
                previousNode.next = currentNode.next;
                this.length--;
                return "Node deleted." + currentNode
            }

            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        //if node note not found by now -  we are on the last node
        if (currentNode.data == val) {
            previousNode.next = null;
            this.length--;
            return "Last Node deleted." + currentNode;
        } else {
            return "Node does not exist.";
        }
    }
}


let linkedList = new LinkedList();