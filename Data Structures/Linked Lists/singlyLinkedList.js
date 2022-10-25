/*
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.
*/
var LinkedList = function (val) {
    this.val = val;
    this.next = null;
};
var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index > this.size - 1)
        return -1;
    var current = this.head;
    for (var i = 0; i < index; i++) {
        current = current.next;
    }
    ;
    return current.val;
};
MyLinkedList.prototype.addAtHead = function (val) {
    var newNode = new LinkedList(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};
MyLinkedList.prototype.addAtTail = function (val) {
    var newNode = new LinkedList(val);
    if (this.head !== null) {
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
    else {
        this.head = newNode;
    }
    this.size++;
};
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size)
        return -1;
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    var newNode = new LinkedList(val);
    var current = this.head;
    for (var i = 0; i < index - 1; i++) {
        current = current.next;
    }
    var temp = current.next;
    current.next = newNode;
    newNode.next = temp;
    this.size++;
};
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index > this.size - 1)
        return -1;
    this.size--;
    if (index === 0) {
        this.head = this.head.next;
        return;
    }
    var current = this.head;
    for (var i = 0; i < index - 1; i++) {
        current = current.next;
    }
    current.next = current.next.next;
};
var myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
myLinkedList.get(1); // return 2
myLinkedList.deleteAtIndex(1); // now the linked list is 1->3
myLinkedList.get(1); // return 3
