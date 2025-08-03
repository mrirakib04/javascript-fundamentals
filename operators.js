// Arithmetic Operators
let a = 10;
let b = 3;

console.log("Addition:", a + b); // 13
console.log("Subtraction:", a - b); // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b); // 3.333...
console.log("Modulus:", a % b); // 1
console.log("Exponentiation:", a ** b); // 1000
console.log("Increment (a++):", a++); // 10 (then a becomes 11)
console.log("After Increment:", a); // 11
console.log("Decrement (b--):", b--); // 3 (then b becomes 2)
console.log("After Decrement:", b); // 2

// Comparison Operators
let x = 5;
let y = "5";

console.log("Equal (==):", x == y); // true (value equality)
console.log("Strict Equal (===):", x === y); // false (type + value)
console.log("Not Equal (!=):", x != y); // false
console.log("Strict Not Equal (!==):", x !== y); // true
console.log("Greater than (>):", x > 3); // true
console.log("Less than (<):", x < 3); // false
console.log("Greater or Equal (>=):", x >= 5); // true
console.log("Less or Equal (<=):", x <= 5); // true

// Logical Operators
let isAdmin = true;
let isVerified = false;

console.log("AND (&&):", isAdmin && isVerified); // false
console.log("OR (||):", isAdmin || isVerified); // true
console.log("NOT (!):", !isAdmin); // false

// Assignment Operators
let z = 10;

z += 5; // z = z + 5
console.log("z += 5:", z); // 15

z -= 3; // z = z - 3
console.log("z -= 3:", z); // 12

z *= 2; // z = z * 2
console.log("z *= 2:", z); // 24

z /= 4; // z = z / 4
console.log("z /= 4:", z); // 6

z %= 4; // z = z % 4
console.log("z %= 4:", z); // 2

z **= 3; // z = z ** 3
console.log("z **= 3:", z); // 8
