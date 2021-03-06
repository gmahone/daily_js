// input parameters - an array of integers, can be positive or negative
// should return the maximal sum of a subarray of the input array
// example: maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
//       -> should return 6: [4, -1, 2, 1]


// -probably start with a double loop solution-
//
// assign result to 0
// loop i from 0...n
// loop j from n...i
// for each iteration:
//   slice array i-j
//   reduce slice to sum subarray
//   if the sum of subarray is > result
//     set result to sum of subarry

function maxSequence(array){
  let subArraySum;
  let result = 0;
  for(i = 0; i < array.length; i++){
    for(j = (array.length - 1); j > i; j--){
      let subArraySum = array.slice(i,j).reduce((acc,c) => acc + c);
      if(subArraySum > result){
        result = subArraySum;
      }
    }
  }
  return(result);
}

// submitted solution
var maxSequence = function(arr){
  let subArraySum;
  let result = 0;
  for(i = 0; i < arr.length; i++){
    for(j = arr.length; j > i; j--){
      let subArraySum = arr.slice(i,j).reduce((acc,c) => acc + c);
      if(subArraySum > result){
        result = subArraySum;
      }
    }
  }
  return(result);
}

// other solutions

// solution with sums and mins
var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}

// solution with only reduce loop
var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}

// solution using forEach
var maxSequence = function(arr){
  var max = 0;
  var cur = 0;
  arr.forEach(function(i){
    cur = Math.max(0, cur + i);
    max = Math.max(max, cur);
  });
  return max;
}
