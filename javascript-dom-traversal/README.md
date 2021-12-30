# Javascript DOM Traversal

### getElementById()

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

```javascript
const grandparent = document.getElementById("grandparent-id");

changeColor(grandparent);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
```

### getElementByClassName()

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

```javascript
const grandparent = document.getElementById("grandparent-id");
const parents = Array.from(document.getElementsByClassName("parent")); // getElementByClassName always returns a collection of objects. Thus, we need to extract the array from it. Hence, Array.from()

parents.forEach((parent) => changeColor(parent));

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
```

### Query Selector

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

```javascript
const grandparent = document.querySelector(".grandparent"); // we can also select an entire class using the class notation of a css selector

const parents = Array.from(grandparent.children);

parents.forEach(changeColor);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
```

Anotehr example is as follows -

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
