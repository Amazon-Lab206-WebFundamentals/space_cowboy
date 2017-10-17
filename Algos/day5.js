//* removing duplicates
arr = [1, 1, 5, 5, 7, 7];

function RemoveDupes(arr);
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.pop(i + 1);
        }
    }
console.log(arr)

function RemoveDupes(arr);
var minArr=[];
var idx = 0;

while(idx<arr.length){
    if(idx==0){ newArr.push(arr[0]);}
    if(arr[idx]!= newArr[newArr.length-1]){
        newArr.push(arr[idx]);
    }
    idx++;
}

//*new arr putting the minimum to the front

function MinToFront(arr){
    for(var i = minidx; i>0; i--){
        arr[i]=arr
}


function fizzBuzz(){
    // iterate from 1 to 100
     for(var i = 1; i <= 100; i++){
         // both print "FizzBuzz"
         if (i % 3 === 0 && i % 5 === 0){
             console.log("FizzBuzz");
         }
         // if number is evenly divisible by 3, print "Fizz"
         else if (i % 3 === 0){
             console.log("Fizz");
         }
         // if number is evenly divisible by 5, print "Buzz"
         else if (i % 5 === 0){
             console.log("Buzz");
         }
         // if none print the number
         else {
             console.log(i);
         }
     }
 }