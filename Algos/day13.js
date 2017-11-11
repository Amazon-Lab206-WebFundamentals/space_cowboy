// Display()
// 5 -> 4 -> 3 -> 2 -> 1 
// then print this with those values and arrows

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




// Prepend (0,3) 

this.Prepend = function(val, before){
    var node = new Node(val);
    if (!this.head){
        this.head = node;
        return this;
    }
    if (this.head.value == before){
        this.AddFront(val);
        return this;
    }
    var current = this.head;
    while (current.next){
        if (current.next.value == before){
            var temp = current.next;
            current.next = node;
            node.next = temp;
            return this;
        }
    }
    current.next = node;
    return this; 
}