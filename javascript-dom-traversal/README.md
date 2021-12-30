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
