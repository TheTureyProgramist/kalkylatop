for (let i = 2; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

console.log("\nТаблиця множення числа 7:");
const multiplier = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${multiplier} * ${i} = ${multiplier * i}`);
}

console.log("\nЕлементи масиву [1, 2, 3, 4, 5]:");const numbers = [1, 2, 3, 4, 5];
let index = 0;
while (index < numbers.length) {
  console.log(numbers[index]);
  index++;
}

console.log("\nЧисла масиву [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], крім числа 7:");
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
  if (array[i] === 7) {
    break;
  }
  console.log(array[i]);
}

console.log("\nЧисла менші за n:");

const n = 10;
for (let i = 1; i < 100; i++) {
  if (i >= n) {
    break;
  }
  console.log(i);
}
