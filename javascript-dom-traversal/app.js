const grandparent = document.getElementById("grandparent-id");
const parents = Array.from(document.getElementsByClassName("parent"));

parents.forEach((parent) => changeColor(parent));

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
