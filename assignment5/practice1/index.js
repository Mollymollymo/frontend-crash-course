const calculate = (operator) => {
  const num1 = Number(document.querySelector(".num1").value);
  const num2 = Number(document.querySelector(".num2").value);

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    result = "";
  }

  document.querySelector(".result").textContent = result;
};
