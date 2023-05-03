const eqObjects = function(object1, object2) {
    const object1key = Object.keys(object1);
    const object2key = Object.keys(object2);
  
    if (object1key.length !== object2key.length) {
      return false;
    }
  
    for (const key of object1key) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  
    return true;
  };
  
  const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect; // this line imports the inspect module
    if (eqObjects(actual, expected)) {
      console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };
const obj3 = { a: 1, b: 3 };

assertObjectsEqual(obj1, obj2); // prints "Assertion Passed: { a: 1, b: 2 } === { b: 2, a: 1 }"
assertObjectsEqual(obj1, obj3); // prints "Assertion Failed: { a: 1, b: 2 } !== { a: 1, b: 3 }"