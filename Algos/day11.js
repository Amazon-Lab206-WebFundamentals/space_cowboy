
// CONTAINS: function takes in a value. see if value is in the list. if it is, return true as soon as you find it. otherwise return false


function Contain(val) {

    var current = this.head;

    while (current) {
        if (current.value == val) {
            return true;
        }
        current = current.next
    }
    return false;
}




// REMOVE FRONT: remove the head node and return the value of that node. access the value not the node. Return the value but preserve the list. List stays in tact
  
function removefront() {
    var current = this.head;
    if (current) {
        this.head = this.head.next;
        return current.val;
    }
    else {
        return null;
    }
}

var mySLL = new mySLL();
var NodeA = new Node(10);
var NodeB = new Node(9);
var NodeC = new Node(8);

NodeA.next = NodeB;
NodeB.next = NodeC;
mySLL.head = NodeA;

removefront()