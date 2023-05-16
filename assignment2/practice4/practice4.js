//practice4-2
let paragraph = document.createElement("p");
let text = document.createTextNode("My first DOM created.");
paragraph.appendChild(text);
let parent = document.querySelector(".container");
parent.appendChild(paragraph);

//practice4-3
let ul = document.createElement("ul");
parent.appendChild(ul);

//practice4-4
let colors = ["red", "blue", "yellow"];
for (let i = 0; i <= colors.length; i++) {
  let li = document.createElement("li");
  let liParent = document.querySelector(".ul");
  li.textContent = colors[i];
  liParent.appendChild(li);
}
