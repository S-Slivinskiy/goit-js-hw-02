let input;
const numbers = [];
let total = 0;
do {
  input = prompt('Введите число');
  numbers.push(Number(input));
} while (input !== null);

if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
}

console.log(`Общая сумма чисел равна ${total}`);
