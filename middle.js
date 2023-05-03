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

  function middle(array) {
    const midIndex = Math.floor(array.length / 2);
    if (array.length <= 2) {
      return [];
    } else if (array.length % 2 === 0) {
      return [array[midIndex - 1], array[midIndex]];
    } else {
      return [array[midIndex]];
    }
  }
  
  // TEST CODE
  assertArraysEqual(middle([1]), []);
  assertArraysEqual(middle([1, 2]), []);
  assertArraysEqual(middle([1, 2, 3]), [2]);
  assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
  assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
  assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);