For h1 tags or other, we do document.innerHTML
For input texts, we do document.value

we can use queryselectorAll and then pass with some index in [] as to which value do we need to display/console

such as ```querySelectorAll(“h4’)[0];```

if we attach an id to a tag, then instead of writing code in the above way, we can write it as:
```
document.querySelector(“#todo1”);
```
or
```
document.getElementById(“todo1”’);
```

for same class, in the style we can we can get by ```document.querySelectorAll(“.todo”)[0];```

setTimeout calls the function only once but setInterval calls repeatedly for the no. of seconds provided

Basically to append, first we have to make that element, so if we will hover over it, it would not highlight the blue area as it does in querySelector for other divs, as it is only made and not appended and then if we add that element to our body then it gets displaced and also blue line if we hover over it 


So in the advanced way of writing dom , we don’t write raw html to append to div, instead we createElement for span and button and append it to a divEl using appendChild and then append the divEl to body using ```querySelector(“body”).appendChild(divEl);```

```todos.splice(0,1)``` removes 1 element from the 0th index .


1.Fetching elements
```
function addTodo() {
  const inputEl = document.querySelector("input");
  const value = inputEl.value;
  console.log(inputEl);
  console.log(value);
}

const h4El = document.querySelector("h4");
console.log(h4El);

const h4ElAll = document.querySelectorAll("h4");
console.log(h4ElAll);
console.log(h4ElAll[1]);

const btn = document.getElementById("btn");
console.log(btn);

const todo = document.getElementsByClassName("todo");
console.log(todo);
```

2.Updating elements
```
document.querySelectorAll("h4")[1].innerHTML = "Hello World";

let counter = 0;

function callback() {
  const element = document.querySelector("h2");
  element.innerHTML = counter;
  // console.log(counter);
  counter++;  
}

setInterval(callback, 1000);
```

3.Deleting elements
```
function deleteTodo(index) {
  const element = document.getElementById("todo-" + index);
  // element.parentNode.removeChild(element);

  document.getElementById("todoParent").removeChild(element);
}


function deleteRandomTodo() {
  const element = document.querySelector("h2");
  const parentElement = element.parentNode;
  
  parentElement.removeChild(element);
}
```

4.Adding elements
```
const divEl = document.createElement("div");
divEl.innerHTML = "Hello World";

// document.querySelector("body").appendChild(divEl);

const parentEl = document.querySelector("body");
parentEl.appendChild(divEl);
```

Also the basic code we wrote for todo using dom manipulation is:
```
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Todo List</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <h1>Todo list</h1>
  <div id="todos">
    <div id="todo-1">
      <h4>1. Take class</h4>
      <button onclick="deleteTodo(1)">Delete</button>
    </div>
    <div id="todo-2">
      <h4>2. Go out to eat</h4>
      <button onclick="deleteTodo(2)">Delete</button>
    </div>
  </div>
  <div>
    <input id="inp" type="text">
    <button onclick="addTodo()">Add Todo</button>
  </div>

  <script>
    let currentIndex = 3;

    function addTodo() {
      const inputEl = document.getElementById("inp");
      const todoText = inputEl.value.trim();

      if (todoText === '') {
        alert('Please enter a todo item.');
        return;
      }

      const parentEl = document.getElementById("todos");

      // Create new todo div
      const newTodo = document.createElement('div');
      newTodo.setAttribute("id", 'todo-' + currentIndex);

      // Create new heading element
      const newHeading = document.createElement('h4');
      newHeading.textContent = currentIndex + '. ' + todoText;

      // Create new button element
      const newButton = document.createElement('button');
      newButton.textContent = 'Delete';
      newButton.setAttribute("onclick", "deleteTodo(" + currentIndex + ")");

      // Append elements to the new todo div
      newTodo.appendChild(newHeading);
      newTodo.appendChild(newButton);

      // Append new todo to the parent element
      parentEl.appendChild(newTodo);

      // Increment the index for the next todo item
      currentIndex++;

      // Clear the input field
      inputEl.value = '';
    }

    function deleteTodo(index) {
      const element = document.getElementById("todo-" + index);
      if (element) {
        element.parentNode.removeChild(element);
      }
    }
  </script>
</body>

</html>
```
