function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: [${arr1}] === [${arr2}]`);
  } else { 
    console.log(`Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test case 1: Mapping words to their lengths
const words = ["ground", "control", "to", "major", "tom"];
const lengths = map(words, word => word.length);
assertArraysEqual(lengths, [6, 7, 2, 5, 3]); // Output: Assertion Passed: [6,7,2,5,3] === [6,7,2,5,3]

// Test case 2: Mapping numbers to their squares
const numbers = [1, 2, 3, 4, 5];
const squares = map(numbers, num => num * num);
assertArraysEqual(squares, [1, 4, 9, 16, 25]); // Output: Assertion Passed: [1,4,9,16,25] === [1,4,9,16,25]

// Test case 3: Mapping strings to their uppercase versions
const strings = ["hello", "world", "foo", "bar"];
const uppercases = map(strings, str => str.toUpperCase());
assertArraysEqual(uppercases, ["HELLO", "WORLD", "FOO", "BAR"]); // Output: Assertion Passed: [HELLO,WORLD,FOO,BAR] === [HELLO,WORLD,FOO,BAR]
