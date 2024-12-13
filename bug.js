function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5)); // Output: 10

//The issue:

//This code seems to work fine at first glance. However, it can lead to unexpected behavior if either a or b is not explicitly null but evaluates to falsy. For example, if one of the arguments is 0, an empty string, or undefined, the function will incorrectly return null even though addition is valid and expected in these cases.