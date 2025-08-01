// var variable
var varNum = 10;
console.log("varNum", varNum); // 10
varNum += 2; // changeable value
console.log("varNum updated", varNum); // 12
// NOTE: 'var' is supported in all browsers (even old ones),
// but it's outdated and should be avoided in modern JavaScript.

// let variable
let letNum = 12;
console.log("letNum", letNum); // 12
letNum -= 2; // changeable value
console.log("letNum updated", letNum); // 10
// 'let' allows you to reassign a variable and change its value,
// commonly used in modern JavaScript.

// const variable
const constNum = 5;
console.log("constNum", constNum); // 5
constNum += 5; // Not allowed to reassign
console.log(constNum); // Error message
const constName = "";
console.log("Empty name", constName); // empty
constName = "Rakib"; // Not allowed to reassign
console.log("Empty name", constName); // Error message
// 'const' doesn't allow you to reassign or change its value,
// it is used for those variables which won't need to be reassigned or changed.
