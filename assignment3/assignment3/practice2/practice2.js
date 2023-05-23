const suggestion = () => {
  const url = "https://www.boredapi.com/api/activity";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const content = data.activity;

      const sug = document.querySelector(".sug");
      sug.textContent = content;
    });
};
suggestion();

const predict = () => {
  const name = document.querySelector(".input").value;

  const url = "https://api.agify.io/?name=danny";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const number = data.activity;
      const age = document.querySelector(".age");
      age.texContent = number;
    });
};
predict();
