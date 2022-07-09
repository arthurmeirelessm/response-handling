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

const arr2 = [7, 2, 1, 6, 3];
const num2 = 1

function run(arr, num) {
  const findValue = arr[num - 1]
  return findValue
}
console.log(run(arr2, num2));


//------------------------------------------------------------------------------------------------------

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const arr3 = [1, 2, 4, 4, 5, 7, 8, 7];

function run(arr) {
  arr.splice(0, 3)
  return arr
}
console.log(run(arr3));


//-----------------------------------------------------------------------------------------------------


// Write a function that takes an array (a) as argument
// Return the number of elements in a


const arr4 = [9, 4, 4, 4, 4];

function run(arr) {
  const initialCount = arr.map((el, index) => index + 1)
  const finalCount = initialCount.length
  return finalCount
}

console.log(run(arr4));

//----------------------------------------------------------------------------------------------------


// Write a function that takes an array of strings as argument
// Return the longest string

const arr = ['I', 'need', 'candy', 'Christopher', 'Alexanderrfdere', 'Makarov'];


function run(arr){
  let largest = '';

  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > largest.length){
      largest = arr[i]
    }
  }
  return largest;
}
  

console.log(run(arr));


//--------------------------------------------------------------------------------------------------------
