//practice5-1
let number = 20;
const isEven = (number) => {
  if (number % 2 === 0) {
    return "true";
  } else {
    return "false";
  }
};
console.log(isEven(number));

//practice5-2
const isLeapYear = (year) => {
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return "true";
  } else if (year % 4 === 0 && year % 100 != 0) {
    return "true";
  } else {
    return "false";
  }
};
console.log(isLeapYear(year));

//practice5-3
const isPrime = (number) => {
  if (
    number % 2 !== 0 &&
    number % 3 !== 0 &&
    number % 4 !== 0 &&
    number % 5 !== 0 &&
    number % 6 !== 0 &&
    number % 7 !== 0 &&
    number % 8 !== 0 &&
    number % 9 !== 0
  ) {
    return "true";
  } else {
    return "false";
  }
};
console.log(isPrime(number));

//practice5-4
const findMax = (e, f, g) => {
  let max = e;
  if (f > max) {
    max = f;
  }
  if (g > max) {
    max = g;
  }
  return max;
};
console.log(findMax(e, f, g));
