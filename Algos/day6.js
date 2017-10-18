// concat

function concat(arr1, arr2) {
    var newarr = [];
    for (var i = 0; i < arr1.length; i++) {
        newarr.push(arr1[i]);
    }
    for (var i = 0; i < arr2.length; i++) {
        newarr.push(arr2[i]);
    }
    return newarr;
}
var arr1 = [1, 2, 3, 4];
var arr2 = ["a", "b", "c"];
var superarray = concat(arr1, arr2);

console.log(superarray);

// reverse

function reverse(arr) {
    var newarr = []
    for (var i = arr.length - 1; i >= 0; i--) {
        newarr.push(arr[i]);
    }
    return newarr;
}
console.log(reverse([1,2,3,4]));
