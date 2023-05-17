function addColor() {
  let color = document.querySelector("input").value;

  let li = document.createElement("li");
  li.textContent = color;

  let ul = document.createElement("ul");

  ul.appendChild(li);

  let list = document.querySelector(".list");
  list.appendChild(ul);
}
