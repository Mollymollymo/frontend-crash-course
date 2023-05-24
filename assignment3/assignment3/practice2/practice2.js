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
  console.log(name);
  const url = "https://api.agify.io/?name=" + name;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { age } = data;
      const ageNode = document.querySelector(".age");
      ageNode.textContent = age;
      //const number = data.age;
      //const age = document.querySelector(".age");
      //age.texContent = number;
    });
};
predict();
