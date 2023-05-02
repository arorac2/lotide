const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
};

// Test cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([null, undefined, 1]), null);;
