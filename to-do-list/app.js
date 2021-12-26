// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeneres
todoButton.addEventListener("click", addTodo);

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