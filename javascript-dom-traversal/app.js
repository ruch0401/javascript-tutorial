const grandparent = document.querySelector(".grandparent"); // we can also select an entire class using the class notation of a css selector
const parents = Array.from(grandparent.children);

const parentOne = parents[0];
const children = parentOne.children;

changeColor(children[0]);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
