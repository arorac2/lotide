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


  function without(source, itemsToRemove) {
    let newArray = [];
    for (let i = 0; i < source.length; i++) {
      if (!itemsToRemove.includes(source[i])) {
        newArray.push(source[i]);
      }
    }
    return newArray;
  }

  // Test cases for without function

const words = ["hello", "world", "lighthouse"];
const wordsWithout = without(words, ["lighthouse"]);

assertArraysEqual(wordsWithout, ["hello", "world"]); // should pass
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // should pass
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // should pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // should pass