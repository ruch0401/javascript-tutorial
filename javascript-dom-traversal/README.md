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
