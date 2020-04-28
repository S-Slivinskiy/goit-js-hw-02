const checkForSpam = function (message) {
  // код
  let newMessage = message.toLowerCase();
  newMessage = newMessage.includes('spam') || newMessage.includes('sale');
  return newMessage;
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
