// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const arr1 = [1, 2, -2, 4];

function run(arr) {
  if (arr.length > 0) {
    const arrExpected = arr.filter((el) => el < 0);
      if (arrExpected.length == 0) {
        return "No negative numbers were found";
      } else {
        return arrExpected;
      }
    }
  }

console.log(run(arr1));

//------------------------------------------------------------------------------------------------------]

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a

const arr2 = [7,2,1,6,3];
const num = 1

function run(arr, num) {
  const findValue = arr[num - 1]
  return findValue
}
console.log(run(arr2, num));


//------------------------------------------------------------------------------------------------------

