//practice2-1
const person = {
  name: "Molly",
  age: 25,
  gender: "female",
  greet: () => {
    console.log("Hello");
  },
  friends: {
    friend1: "Jan",
    friend2: "Sandy",
    friend3: "Lucy",
  },
};
console.log(person);
console.log(person.name);
console.log(person.age);

//practice2-2
console.log(person.greet());
//practice2-3
console.log(person.friends);
