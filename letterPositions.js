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

  const letterPositions = function(word) {
    const results = {};
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (char !== ' ') {
        if (results[char]) {
          results[char].push(i);
        } else {
          results[char] = [i];
        }
      }
    }
    return results;
  };
  
const result = letterPositions("hello");
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
