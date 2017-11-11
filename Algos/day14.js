//  Remove Val

this.removeVal = function (val) {
    if (this.head == null) {
        return this;
    }
    var current = this.head;
    var temp = 0;
    while (current) {
        if (current.value == val) {
            var temp = current;
            current = current.next;
            return this;
        }
        if (current.value != val) {
            var temp = current;
            current = current.next;
            return this;
        }
        current = current.next;            
        return this;
    }
}

