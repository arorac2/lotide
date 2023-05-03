const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const countLetters = function(word) {
    const letterCount = {};
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (char !== ' ') {
        if (letterCount[char]) {
          letterCount[char]++;
        } else {
          letterCount[char] = 1;
        }
      }
    }
    return letterCount;
  };



const result = countLetters('LHL');
assertEqual(result['L'], 1);
assertEqual(result['H'], 1);