const childOne = document.querySelector("#child-one");

// Selecting ancestor
const grandparent = childOne.closest(".grandparent");
// closest works just like .querySelector() but it travels upwards and finds the closest parent that matches with the selector provided and returns that element instead.

changeColor(grandparent);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
