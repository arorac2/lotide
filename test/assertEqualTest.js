const assertEqual = require('../assertEqual');
// Comparing identical strings
assertEqual("hello", "hello"); // Assertion Passed: hello === hello

// Comparing non-identical strings
assertEqual("hello", "world"); // Assertion Failed: hello !== world

// Comparing identical numbers
assertEqual(42, 42); // Assertion Passed: 42 === 42

// Comparing non-identical numbers
assertEqual(42, 7); // Assertion Failed: 42 !== 7

