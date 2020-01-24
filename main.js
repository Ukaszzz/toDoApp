const toDoList = [];

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const taskNumber = document.querySelector("h1 span");
const listItems = document.getElementsByClassName("task");
const input = document.querySelector("input");

const renderList = () => {
  ul.textContent = "";
  const liItems = document.querySelectorAll("li.task").length;
  toDoList.forEach((todoElement, key) => {
    todoElement.dataset.key = key;
    ul.appendChild(todoElement);
  });
};
addTask = e => {
  e.preventDefault();
  const titeTask = input.value;
  if (titeTask === "") return;
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = titeTask + `<button> <i class="fas fa-trash"></i> </button>`;
  toDoList.push(task);

  renderList();

  ul.appendChild(task);
  input.value = "";

  taskNumber.textContent = toDoList.length;
  task.querySelector("button").addEventListener("click", removeTask);
};

const removeTask = e => {
  e.target.parentNode.remove();
  const index = e.target.parentNode.dataset.key;
  toDoList.splice(index, 1);
  taskNumber.textContent = toDoList.length;
  renderList();
};

const searchTask = e => {
  const searchText = e.target.value.toLowerCase();

  const text = toDoList.filter(li =>
    li.textContent.toLowerCase().includes(searchText)
  );

  ul.textContent = "";
  text.forEach(li => ul.appendChild(li));
};

input.addEventListener("input", searchTask);
form.addEventListener("submit", addTask);
