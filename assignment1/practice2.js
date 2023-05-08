//practice2-1
let age = 20;
if (age >= 18) {
  console.log("can vote");
} else {
  console.log("can't vote");
}

//practice2-2
let num = 25;
if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

//practice2-3
let a2 = 3;
let b2 = 7;
if (a2 > b2) {
  console.log("a2 is bigger than b2");
} else if (b2 > a2) {
  console.log("b2 is bigger than a2");
} else {
  console.log("they're equaled");
}

//practice2-4
let c2 = 10;
if (a2 > b2 && a2 > c2) {
  console.log("a2 is the biggest");
} else if (b2 > a2 && b2 > c2) {
  console.log("b2 is the biggest");
} else if (c2 > a2 && c2 > b2) {
  console.log("c2 is the biggest");
} else {
  console.log("they're equaled");
}

//practice2-5
if (c2 >= a2 && c2 < b2) {
  console.log("c2 is in the range");
} else {
  console.log("c2 is'nt in the range");
}

//practice2-6
let year = 102;
if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
  console.log("閏年");
} else if (year % 4 === 0 && year % 100 != 0) {
  console.log("閏年");
} else {
  console.log("不是閏年");
}
