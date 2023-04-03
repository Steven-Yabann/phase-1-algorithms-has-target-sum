function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let num1 = 0; num1 < array.length; num1++){
    for (let num2 = num1 + 1; num2 < array.length; num2++){
      if (array[num1] + array[num2] === target){
        return true
      }
      
    }
  }return false
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  iterate through the array
  iterate through the same array one step ahead
  compare the sum of the iterated numbers to the target value
  return true if equal else false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
