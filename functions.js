// ✅ Function Declaration
// Can be called before it's defined due to hoisting
function greet(name) {
  return `Hello, ${name}!`;
}
console.log("Function Declaration:", greet("Rakib"));

// ✅ Function Expression
// Stored in a variable, not hoisted
const add = function (a, b) {
  return a + b;
};
console.log("Function Expression (add):", add(5, 3));

// ✅ Arrow Function
// Shorter syntax, no 'this' binding
const multiply = (x, y) => x * y;
console.log("Arrow Function (multiply):", multiply(4, 2));
