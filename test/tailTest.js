const assert = require('chai').assert;
const tail   = require('../tail');
const assertEqual = require('../assertEqual');

describe("#tail", () => {
    it("returns [6, 7] for [5, 6, 7]", () => {
      const expected = [6, 7];
      const actual = tail([5, 6, 7]);
      for (let i = 0; i < expected.length; i++) {
        assertEqual(actual[i], expected[i]);
      }
    });
  
    it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
      const expected = ["Lighthouse", "Labs"];
      const actual = tail(["Hello", "Lighthouse", "Labs"]);
      for (let i = 0; i < expected.length; i++) {
        assertEqual(actual[i], expected[i]);
      }
    });
  });