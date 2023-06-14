const add = () => {
  const item = document.createElement("div");
  item.classList.add("item");

  const value = document.querySelector(".input").value;
  const todoItem = document.querySelector(".todoItem");
  let p = document.createElement("p");
  p.textContent = value;
  item.appendChild(p);
  todoItem.appendChild(item);
  const todoList = document.querySelector(".todoList");
  todoList.appendChild(todoItem);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttonContainer");

  const doneButton = document.createElement("button");
  doneButton.classList.add("done");
  doneButton.textContent = "done";
  doneButton.addEventListener("click", (event) => done(event.target));
  buttonContainer.appendChild(doneButton);

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("cancel");
  cancelButton.textContent = "cancel";
  cancelButton.addEventListener("click", (event) => cancel(event.target));
  buttonContainer.appendChild(cancelButton);

  item.appendChild(buttonContainer);
};

const done = (button) => {
  const item = button.parentElement.parentElement;
  item.style.textDecoration = "line-through";
};

const cancel = (button) => {
  const item = button.parentElement.parentElement;
  item.innerHTML = "";
};
