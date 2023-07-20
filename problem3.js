function PairSum(arr, target) {
    let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];

    if (currentSum === target) {
      return [left, right];
    } else if (currentSum < target) {
      // If the sum is less than the target, move the left pointer to the right to increase the sum.
      left++;
    } else {
      // If the sum is greater than the target, move the right pointer to the left to decrease the sum.
      right--;
    }}
    // your code here
  }
  
  
  console.log(PairSum([1, 2, 3, 4, 6], 6)) // [1, 3]
  console.log(PairSum([2, 5, 9, 11], 11))  // [0, 2]
  console.log(PairSum([1, 3, 5, 7], 12))   // [2, 3]
  console.log(PairSum([1, 4, 6, 8], 10))   // [1, 2]
  console.log(PairSum([1, 5, 6, 7], 6))    // [0, 1]