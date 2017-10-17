// loop through each array value

var nums = [1,3,5,7];     // set up our loop
for (var idx = 0; idx < nums.length; idx++)  // for each index in arr...
{
  console.log(nums[idx]);    // ...print the value
}


// multiples of 3 up to 99,999

var arr = [];         // create empty array
for (var val = 3; val <= 99999; val += 3) // val will be 3,6,...99999
{
  arr.push(val);      // add each val to arr
}
console.log(arr);     // [3,6,9,12,..., 99999]


// writing values into arrays

var arr = [2, 4, 6, 8]; // create array with four distinct values
arr[1] = 10; // arr was [2, 4, 6, 8], is [2, 10, 6, 8].
arr = [2, 10, 6, 8];
temp = arr[1]; // arr == [2, 10,6, 8], temp == 10
arr[1] = arr[3]; // arr == [2, 8, 6, 8], temp == 10
arr[3] = temp; // arr == [2, 8, 6, 10], temp == 10
console.log(arr); // displays [2,8,6,10]


// fancy needs to print an array fancy like below:
0 -> James
1 -> Jill
2 -> Jane
3 -> Jack