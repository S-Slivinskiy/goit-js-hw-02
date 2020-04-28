let number;
const logItems = function (array) {
  // код
  for (let i = 0; i < array.length; i += 1) {
    number = i + 1;
    console.log(`${number}-${array[i]}`);
  }
  return array;
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
