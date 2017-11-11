// FRONT - Retun the value at the head of the list. If Null return null

this.Front = function () {
    if (this.head != null) {
        return this.head;
    }
    else {
        return null;
    }
}

// Length. Make length and front function of the SLL class
this.Length = function () {
    var current = this.head;
    var counter = 1;
    while (current) {
        current = current.next;
        counter += 1;
    }
    return counter;
}

// Minimum

this.Minimum = function () {
    if (this.head == null) {
        return null;
    }
    var current = this.head;
    var min = this.head.value;
    while (current) {
        if (current.value < min) {
            min = current.value;
        }
        current = current.next;
    }
    return min;
}


// Max

this.Maximum = function () {
    if (this.head == null) {
        return null;
    }
    var current = this.head;
    var max = this.head.value;
    while (current) {
        if (current.value > max) {
            max = current.value;
            current = current.next;
        }
        current = current.next;
    }
    return max;
}


// Average 

this.Average = function () {
    var counter = 0;
    var sum = 0;
    var temp = this.head;
    while (temp != null){
        counter++;
        sum = sum + temp.value;
        temp = temp.next;
    }
    return sum / counter;
}