# Javascript DOM Traversal

## Basic HTML

```html
<body>
  <div class="grandparent" id="grandparent-id">
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
  </div>
  <script src="app.js"></script>
</body>
```

### getElementById()

```javascript
const grandparent = document.getElementById("grandparent-id");

changeColor(grandparent);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
```

### getElementByClassName()

```javascript
const grandparent = document.getElementById("grandparent-id");
const parents = Array.from(document.getElementsByClassName("parent")); // getElementByClassName always returns a collection of objects. Thus, we need to extract the array from it. Hence, Array.from()

parents.forEach((parent) => changeColor(parent));

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
```

### Query Selector

```javascript
const grandparent = document.querySelector("#grandparent-id"); // we pass the css selector to the querySelector() function

const grandparent = document.querySelector(".grandparent"); // we can also select an entire class using the class notation of a css selector

changeColor(grandparent);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
```

- `querySelector()` just picks the first match and applies the provided changes to that element

### Query Selector All

```javascript
const grandparent = document.querySelector(".grandparent"); // we can also select an entire class using the class notation of a css selector

const parents = document.querySelectorAll(".parent");

// changeColor(grandparent);
// parents.forEach((parent) => changeColor(parent));
parents.forEach(changeColor);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
```

- If you wish to select all the elements pertaining to a single query selector, use `querySelectorAll()`.

### Selecting Children

```javascript
const grandparent = document.querySelector(".grandparent"); // we can also select an entire class using the class notation of a css selector

const parents = Array.from(grandparent.children);

parents.forEach(changeColor);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
```

Another example is as follows -

```javascript
const grandparent = document.querySelector(".grandparent"); // we can also select an entire class using the class notation of a css selector
const parents = Array.from(grandparent.children);

const parentOne = parents[0];
const children = parentOne.children;

changeColor(children[0]);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
```

### Selecting Descendents

`getElementById()`, `getElementsByClassName()`, `querySelector()` and `querySelectorAll()` can all be used on any javascript element and not just the `document`.

```javascript
const grandparent = document.querySelector(".grandparent"); // we can also select an entire class using the class notation of a css selector
const children = grandparent.querySelectorAll(".child");

children.forEach(changeColor);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
```

### Selecting Parent

```html
<body>
  <div class="grandparent" id="grandparent-id">
    <div class="parent">
      <div class="child" id="child-one"></div>
      <div class="child"></div>
    </div>
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
  </div>
  <script src="app.js"></script>
</body>
```

```javascript
const childOne = document.querySelector("#child-one");

// Traversing UP the tree
const parent = childOne.parentElement;
const grandparent = parent.parentElement;
changeColor(grandparent);
function changeColor(element) {
  element.style.backgroundColor = "#333";
}
```

### Selecting Ancestors

```javascript
const childOne = document.querySelector("#child-one");

// Selecting ancestor
const grandparent = childOne.closest(".grandparent");
// closest works just like .querySelector() but it travels upwards and finds the closest parent that matches with the selector provided and returns that element instead.

changeColor(grandparent);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
```

### Next Element Sibling

```javascript
const childOne = document.querySelector("#child-one");
const childTwo = childOne.nextElementSibling;

changeColor(childTwo);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
```

### Previous Element Sibling

```javascript
const childOne = document.querySelector("#child-one");
const childTwo = childOne.nextElementSibling;

changeColor(childTwo.previousElementSibling);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
```
