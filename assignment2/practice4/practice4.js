//practice4-2
let p = document.createElement("p");
let text = document.createTextNode("My first DOM created.");
p.appendChild(text);
let container = document.querySelector(".container");
container.appendChild(p);

//practice4-3
let ul = document.createElement("ul");
container.appendChild(ul);

//practice4-4
let colors = ["red", "blue", "yellow"];
for (let i = 0; i <= colors.length; i++) {
  let li = document.createElement("li");
  li.textContent = colors[i];
  ul.appendChild(li);
}
