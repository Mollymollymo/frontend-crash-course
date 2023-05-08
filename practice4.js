//practice4-1
for (let i = 1; i <= 10000; i++) {
  console.log(i);
}

//practice4-2
let i2 = 1;
while (i2 <= 100) {
  if (i2 % 2 === 0) {
    console.log(i2);
  }
  i2++;
}

//practice4-3
let i3 = 1;
while (i3 <= 100) {
  if (i3 % 2 !== 0) {
    console.log(i3);
  }
  i3++;
}

//practice-4-4
let i4 = 1;
while (i4 <= 100) {
  if (
    i4 % 2 !== 0 &&
    i4 % 3 !== 0 &&
    i4 % 4 !== 0 &&
    i4 % 5 !== 0 &&
    i4 % 6 !== 0 &&
    i4 % 7 !== 0 &&
    i4 % 8 !== 0 &&
    i4 % 9 !== 0
  ) {
    console.log(i4);
  }
  i4++;
}

//practice4-5
let size = 6;
let triangle = "";
for (let i5 = 1; i5 <= size; i5++) {
  for (let j = 1; j <= i5; j++) {
    triangle += "*";
  }
  triangle += "\n";
}
console.log(triangle);

//practice4-6

for (let i6 = 1; i6 <= 9; i6++) {
  for (let j1 = 1; j1 <= 9; j1++) {
    console.log(i6 + "*" + j1 + "=" + i6 * j1);
  }
}
