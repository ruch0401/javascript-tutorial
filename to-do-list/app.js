// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todos");

// Event Listeneres
document.addEventListener("DOMContentLoaded", getTodos); // then the dom has been loaded, we fetch the contents already present in the local storage to display on the UI
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions
function addTodo(event) {
  // Prevent form from submitting. Since the html element is a form, the default action of this button is to submit the form. event.preventDefault() prevents this default action
  event.preventDefault();

  // The following code is dom manipulation using javascript
  // to-do Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // create li
  const newTodo = document.createElement("li"); // creates an html element
  newTodo.innerText = todoInput.value; // since this is a list, adding test text to the list data
  newTodo.classList.add("todo-item"); // adding a classname to the html element, <li class="todo-item">Hey</li>
  todoDiv.appendChild(newTodo); // appending this element to the todoDiv (parent div)

  // Add todo to local storage
  saveLocalTodos(todoInput.value);

  // Check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // Check trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // Append to list
  todoList.appendChild(todoDiv);

  // Clear todoInput value
  todoInput.value = "";
}

function deleteCheck(event) {
  // this gets the item id
  const item = event.target;

  // Delete Todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // the element still remains after the transition. we need to change this functionality

    // Animation
    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", () => todo.remove());
  }

  // Check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed"); // we have created this class to that once the complete-btn is clicked, we can apply new css
  }
}

function filterTodo(event) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        todo.style.display = todo.classList.contains("completed")
          ? "flex"
          : "none";
        break;
      case "uncompleted":
        todo.style.display = !todo.classList.contains("completed")
          ? "flex"
          : "none";
        break;
    }
  });
  console.log(todos);
}

function saveLocalTodos(todo) {
  let todos;
  todos = checkWhetherSomethingIsPresentInLocalStorage();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos = checkWhetherSomethingIsPresentInLocalStorage();
  todos.forEach(function (todo) {
    // for each todo, we are essentially adding it using the addTodo() function

    // The following code is dom manipulation using javascript
    // to-do Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // create li
    const newTodo = document.createElement("li"); // creates an html element
    newTodo.innerText = todo; // since this is a list, adding test text to the list data
    newTodo.classList.add("todo-item"); // adding a classname to the html element, <li class="todo-item">Hey</li>
    todoDiv.appendChild(newTodo); // appending this element to the todoDiv (parent div)

    // Check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append to list
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  let todos = checkWhetherSomethingIsPresentInLocalStorage();
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1); // splice method removes an element from the div. 1st argument: which element to remove, 2nd argument: how many elements to remove
  localStorage.setItem("todos", JSON.stringify(todos));
}

function checkWhetherSomethingIsPresentInLocalStorage() {
  // check whether something is present in the todos
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}
