// DOM Manipulation (Basic)

// Select an element by ID
const heading = document.getElementById("main-heading");
heading.textContent = "Updated Heading from JavaScript";

// Select elements by class name
const items = document.getElementsByClassName("list-item");
items[0].style.color = "red"; // First item color red

// Select with querySelector
const firstButton = document.querySelector("button");
firstButton.style.backgroundColor = "blue";

// Change HTML content
const paragraph = document.querySelector("#info");
paragraph.innerHTML = "<strong>Updated paragraph content</strong>";

// Create a new element
const newItem = document.createElement("li");
newItem.textContent = "New List Item";
document.querySelector("ul").appendChild(newItem);

// Remove an element
const removeMe = document.querySelector("#remove-me");
removeMe.remove();

// Add Event Listener
firstButton.addEventListener("click", function () {
  alert("Button Clicked!");
});
