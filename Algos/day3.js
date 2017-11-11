var sam_array =[2,4,8]

InsertAt(sam_array, 1, 666)

function InsertAt(arr, idx, val){
    var x = idx +1;
    var y = arr.length;
    for(var i=y; i>idx; i--){
        arr[i] = arr[i-1];
    }
    arr[idx] = val;
}

console.log(sam_array)


function RemoveAt(arr,idx);{
    var; x = arr[idx]
    for(var i=x; i<arr.length-1; i++){
        arr[i]=arr[i+1];
    }
    arr.length = arr.length-1;
    return x
}

function removeAt(arr, idx){
    if (idx >= 0 && idx < arr.length){
        var temp = arr[idx];
        for(var i = idx; i < arr.length; i++){
            arr[i]=arr[i+1];
        }
        arr.length--;
        return temp;
    }
    return null;
}