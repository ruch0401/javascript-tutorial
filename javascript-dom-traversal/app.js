const grandparent = document.querySelector(".grandparent"); // we can also select an entire class using the class notation of a css selector
const children = grandparent.querySelectorAll(".child");

children.forEach(changeColor);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
