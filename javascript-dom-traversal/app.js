// const grandparent = document.querySelector("#grandparent-id"); // we pass the css selector to the querySelector() function
const grandparent = document.querySelector(".grandparent"); // we can also select an entire class using the class notation of a css selector

const parents = document.querySelectorAll(".parent");

// changeColor(grandparent);
// parents.forEach((parent) => changeColor(parent));
parents.forEach(changeColor);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
