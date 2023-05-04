const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const findKey = function(obj, callback) {
    for (let key in obj) {
      if (callback(obj[key])) {
        return key;
      }
    }
    return undefined;
  };

  // Test case 1: find a key with a truthy value
const result1 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2);
  assertEqual(result1, "noma"); // Output: Assertion Passed: noma === noma
  
  // Test case 2: find a key with a falsy value
  const result2 = findKey({
    a: false,
    b: "",
    c: null,
    d: 0,
    e: undefined
  }, x => x);
  assertEqual(result2, undefined); // Output: Assertion Passed: undefined === undefined
  
  // Test case 3: find a key in an empty object
  const result3 = findKey({}, x => true);
  assertEqual(result3, undefined); // Output: Assertion Passed: undefined === undefined