// // arrays 

// x = [0,1,2]

// // contigus memory - there is a limit to it


// // SLLs 

// functionSLL(){
//     this.head = null;
// }
// var mySLL = newSLL();
// console.log(mySLL);
// {head:null}

function SLL() {
    this.head = null;
    // AddFront
    this.AddFront = function (val) {
        var node = new Node(val);
        if (this.head == null) {
            this.head = node;
        }
        else {
            var temp = this.head;
            this.head = node;
            node.next = temp;
        }
    }

    this.Contain = function (val) {
        var current = this.head;
        while (current) {
            if (current.value == val) {
                return true;
            }
            current = current.next
        }
        return false;
    }

    this.removefront = function () {
        var current = this.head;
        if (current) {
            this.head = this.head.next;
            return current.val;
        }
        else {
            return null;
        }
    }

    this.Maximum = function (){
        var current = this.head;
        var max = this.head;
        while (current){
            if (current.next > current){
                max = current.next;
                current = current.next;
            }
            else{
                current = current.next;
            }
        }
        return max;
    }

    this.Minimum = function (){
        var current = this.head;
        var min = this.head;
        while (current){
            if (current.next < current){
                min = current.next;
                current = current.next;
            }
            else{
                current=current.next;
            }
        }
        return min;
    }

    this.Length = function (){
        var current = this.head;
        var counter = 1;
        while (current){
            current = current.next;
            counter +=1;
        }
        return counter;
    }

    this.Display = function(){
        var string = "";
        if (this.head == null){
            return null;
        }
        var current = this.head;
        while(current){
            string = current.value + " => ";
        }
        return string;
    }
}

function Node(val) {
    this.value = val;
    this.next = null;
}

var mySLL = new mySLL();
var NodeA = new Node(10);
var NodeB = new Node(234);
var NodeC = new Node(206);

NodeA.next = NodeB;
NodeB.next = NodeC;
mySLL.head = NodeA;

console.log(mySLL);
console.log(NodeA);
//AddFront