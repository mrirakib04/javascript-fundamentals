// -------------------------------
// ARRAYS BASICS
// -------------------------------

// Creating an array
const fruits = ["Apple", "Mango", "Banana"];

// Accessing values
console.log(fruits[0]); // Apple
console.log(fruits.length); // 3

// Add at end
fruits.push("Orange"); // ["Apple", "Mango", "Banana", "Orange"]

// Remove from end
fruits.pop(); // ["Apple", "Mango", "Banana"]

// Add at start
fruits.unshift("Strawberry"); // ["Strawberry", "Apple", "Mango", "Banana"]

// Remove from start
fruits.shift(); // ["Apple", "Mango", "Banana"]

// Find index
console.log(fruits.indexOf("Mango")); // 1

// Check exists
console.log(fruits.includes("Apple")); // true

// Join into string
console.log(fruits.join(", ")); // Apple, Mango, Banana

// Slice (non-destructive)
console.log(fruits.slice(0, 2)); // ["Apple", "Mango"]

// Splice (remove/replace)
fruits.splice(1, 1, "Kiwi"); // Replace Mango -> Kiwi

// Iterate (forEach)
fruits.forEach((fruit) => console.log(fruit));

// Map (transform each element)
const upper = fruits.map((f) => f.toUpperCase());
console.log(upper);

// Filter (find matching elements)
const short = fruits.filter((f) => f.length <= 5);
console.log(short);

// Find (first match)
console.log(fruits.find((f) => f.startsWith("B")));

// Reduce (accumulate values)
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

// -------------------------------
// OBJECTS BASICS
// -------------------------------

// Creating an object
const person = {
  name: "Rakib",
  age: 20,
  city: "Dhaka",
};

// Access values
console.log(person.name); // Rakib
console.log(person["city"]); // Dhaka

// Add or update property
person.country = "Bangladesh";

// Delete property
delete person.city;

// Keys (array of property names)
console.log(Object.keys(person));

// Values (array of property values)
console.log(Object.values(person));

// Entries (array of key-value pairs)
console.log(Object.entries(person));

// Loop through object
for (let key in person) {
  console.log(key, person[key]);
}

// Check if property exists
console.log(person.hasOwnProperty("name")); // true

// Merge objects
const extra = { hobby: "Coding" };
const merged = { ...person, ...extra };
console.log(merged);
