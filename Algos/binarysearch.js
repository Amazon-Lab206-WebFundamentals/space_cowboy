// Binary Search a Sorted Array
function binarySearch(arr, val){
    var left = 0;
    var right = arr.length-1;
    while (left <= right){
        var guessIdx = Math.floor((right+left) / 2);
        var guessVal = arr[guessIdx];
        if (guessVal == val){
            return true;
        }
        if (guessVal < val){
            left = guessIdx+1;
        }else{
            right = guessIdx-1;
        }
    }
    return false;
}