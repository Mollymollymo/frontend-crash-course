//practice1-1
const fruits = ["pineapple", "guava", "banana", "orange", "grapes"];

//practice1-2
console.log(fruits);

//practice1-3
fruits.splice(2, 0, "durian");
console.log(fruits);

//practice1-4
fruits.push("mango", "apple");
console.log(fruits);

//practice1-5
fruits.splice(0, 1);
console.log(fruits);

//practice1-6
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//practice1-7
const numbers = [5, 6, 7];
const squared = numbers.map((element, index, originalArray) => {
  return element * element;
});
console.log(squared);

//practice1-8

//practice1-9
const sum = numbers.reduce((accumulator, element, index, originalArray) => {
  return accumulator + element;
}, 0);
console.log(sum);
