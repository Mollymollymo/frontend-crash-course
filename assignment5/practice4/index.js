let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);

let button = document.querySelector(".button");
let small = document.querySelector(".small");
let large = document.querySelector(".large");

const guess = () => {
  let value = document.querySelector(".input").value;
  if (value < randomNumber) {
    small.style.backgroundColor = "yellow";
  } else if (value > randomNumber) {
    large.style.backgroundColor = "yellow";
  } else if ((value = randomNumber)) {
    let answer = document.querySelector(".answer");
    let randomNumberTextNode = document.createTextNode(randomNumber);
    answer.appendChild(randomNumberTextNode);
  }
};

button.addEventListener("click", guess);
