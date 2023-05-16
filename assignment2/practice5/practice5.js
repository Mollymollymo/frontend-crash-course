function addToList() {
  let inputValue = document.querySelector("input").value;
  let colorList = document.getElementsByClassName("list");
  colorList.appendChild(inputValue);
}
