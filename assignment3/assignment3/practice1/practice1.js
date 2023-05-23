let number = 0;
const counter = document.querySelector(".counter");
const add = () => {
  console.log(number++);
  newNumber();
};
const sub = () => {
  console.log(number--);
  newNumber();
};
const newNumber = () => {
  counter.textContent = number;
};

const reset = () => {
  console.log((number = 0));
  newNumber();
};

let todoList = document.querySelector(".todo-list");
let todoItem = document.querySelector(".todo-item");
const addToList = () => {
  let item = document.querySelector(".input").value;
  let p = document.createElement("p");
  p.textContent = item;

  todoItem.appendChild(p);
  todoList.appendChild(todoItem);
};
