//Level 1
//Print the values from 1 to 255... 1 2 3 4 5 6 ... 255

function ger_array(){
    for(var idx = 1; idx <256; idx++){
        console.log(idx);
}

//Print ODD values from 1 to 255... 1 3 5 7 9 11 ... 255

function get_array(){
    for(var idx = 1; idx <256; idx++){
        if(idx % 2 == 1)
        console.log(idx);

//Iterate through an array and print the values
//Example: given [-1,15,"Amazon",true], print the values -1 15 "Amazon" true
;

for (var i=0; i <arr.length; i++){
    console.log(arr[i]);
}

//Level 2
//Build and return an array of odd numbers from 1 to 255

for(var i=0; i<256; i++){
    if(i%2==0){
        console.log(arr[i])
    }
}

//Given an array, find the minimum and print it

var min = arr[0];
for(var i=1; i<arr.length; i++){
    if(min > arr[i]){
        min = arr[i]
    }
    console.log(min)
}

//Given an array, find the min, max, and average and print them

function maxMinAvg(arr) {
    
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
        for (var i = 1; i < arr.length; i++){
            if (max < arr[i]){
                max = arr[i];
            }   
            if (min > arr[i]){
                min = arr[i];
            }
        sum = sum + arr[i];
        }
        
    var avg = sum / arr.length;
    var arrnew = [max, min, avg];
        return arrnew; 
    }

//Given an array, replace any negative values with the string "Amazon"
//Example: given [-1,0,2], alter the array to be ["Amazon", 0, 2]

for(var i=0; i < arr.length; i++){
    if(arr[i] <0){
        arr[i] = "Amazon"
    }
    console.log(arr)
}