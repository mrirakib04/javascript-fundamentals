// Events and Event Listeners

// Select a button
const btn = document.querySelector("#myButton");

// Click event
btn.addEventListener("click", function () {
  alert("Button Clicked!");
});

// Mouse over event
btn.addEventListener("mouseover", function () {
  btn.style.backgroundColor = "green";
});

// Mouse out event
btn.addEventListener("mouseout", function () {
  btn.style.backgroundColor = "";
});

// Keyboard event
document.addEventListener("keydown", function (event) {
  console.log("Key Pressed:", event.key);
});

// Form submit event
const form = document.querySelector("#myForm");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload
  alert("Form Submitted!");
});
