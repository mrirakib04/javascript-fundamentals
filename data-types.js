// String
let myName = "Rakib";
console.log("String:", myName, typeof myName);
// typeof myName = string
// "String" used to store textual data

// Number
let myAge = 17; // typeof myAge = number
let pi = 3.14; // typeof pi = number
console.log("Number (integer):", myAge, typeof myAge);
console.log("Number (float):", pi, typeof pi);
// "Integer" and "Float" used to store numeric data

// Boolean
let isLoggedIn = true;
let hasPermission = false;
console.log("Boolean (true):", isLoggedIn, typeof isLoggedIn);
console.log("Boolean (false):", hasPermission, typeof hasPermission);
// "Boolean" used to store true-false

// Null
let selectedItem = null;
console.log("Null:", selectedItem, typeof selectedItem);
// "Null" represents an intentionally empty value

// Undefined
let unassigned;
console.log("Undefined:", unassigned, typeof unassigned);
// "Undefined" used to declare a variable without value

// Object
let user = {
  name: "Rakib",
  age: 17,
  isDeveloper: true,
  skills: ["MongoDB", "Express", "React", "Node"],
};
console.log("Object:", user, typeof user);
// "Object" used to store data in key-value pairs

// Array
let hobbiesOf = [{ name: "Rakib", age: 17 }, "Coding", "Gaming"];
console.log("Array:", hobbiesOf, typeof hobbiesOf, Array.isArray(hobbiesOf));
// Arrays are just objects with numeric keys
// "Array" used to store multiple items data
