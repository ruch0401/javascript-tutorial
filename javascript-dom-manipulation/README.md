# Javascript DOM Manipulation

### Adding Elements

```javascript
const body = document.body;
body.append("Hello World"); // appends strings to the body as well as nodes
body.appendChild("Hello"); // this will throw an error since appendChild only accepts 'node' types and NOT simple strings

// It is recommended to use .append for allow for more versatility
```

### Creating Elements

```javascript
const body = document.body;
const div = document.createElement("div"); // just doing this will not render a div on the HTML page as creating an element is different from adding an element which is a crucial step

body.append(div); // this will render a div on the HTML page
```

### Modifying Element Text

```javascript
const body = document.body;
const div = document.createElement("div");
div.innerText = "Hello World";
div.textContent = "Hello World 2";

body.append(div);
```

- Setting the text using `innerText` and `textContent` is the same but there is a small difference while viewing the element
- `innerText` considers the HTML to check whether the text is visible on the UI and then only displays the text.
- `textContent` on the other hand, prints out all the spaces and formatting along with it.

### Modifying Element Text

```javascript
const body = document.body;
const div = document.createElement("div");
div.innerHTML = "<strong>Hello World</strong>"; // notice the innerHTML method

body.append(div);
```

Breaking down HTML by hand leads to the following code -

```javascript
const body = document.body;
const div = document.createElement("div");
const strong = document.createElement("strong");
strong.innerText = "Hello World";
div.append(strong);
body.append(div);
```

- Note that using innerHTML comes with potential security problems

### Removing Elements

```javascript
const body = document.body;
const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

spanBye.remove(); // method 1 -> recommended
div.append(spanBye); //  adds the span 'spanBye' to the div
div.removeChild(spanHi); // remove span from parent
```

### Modifying Element Attributes

- Anything that you get from `.getAttribute()` is also available as a method on the element itself.

```html
<body>
  <div>
    <span title="hello" id="hi">Hello</span>
    <span id="bye">bye</span>
  </div>

  <script src="script.js"></script>
</body>
```

```javascript
const body = document.body;
const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

console.log(spanHi.getAttribute("id")); // gets the attribute named id
spanHi.setAttribute("id", "sfsdfsdf"); // sets the id attribute to the given value
spanHi.removeAttribute("title"); // removes the title attribute
```

### Modifying Data Attributes

- Anything that you get from `.getAttribute()` is also available as a method on the element itself.

```html
<body>
  <div>
    <span title="hello" id="hi">Hello</span>
    <span id="bye">bye</span>
  </div>

  <script src="script.js"></script>
</body>
```

```javascript
const body = document.body;
const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

console.log(spanHi.getAttribute("id")); // gets the attribute named id
spanHi.setAttribute("id", "sfsdfsdf"); // sets the id attribute to the given value
spanHi.removeAttribute("title"); // removes the title attribute
```
