// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const arr = [1, 2, 2, 4];

function run(arr) {
  if (arr.length > 0) {
    let newArr = [];
    const arrExpected = arr.filter((el) => el < 0);
    newArr.push(arrExpected);
    for (let i = 0; newArr.length > i; i++) {
      if (newArr[i] == 0) {
        return "No negative numbers were found";
      } else {
        return newArr;
      }
    }
  }
}

console.log(run(arr));

//------------------------------------------------------------------------------------------------------]


