const childOne = document.querySelector("#child-one");

// Traversing UP the tree
const parent = childOne.parentElement;

const grandparent = parent.parentElement;

changeColor(grandparent);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
