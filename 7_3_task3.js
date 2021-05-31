// Задание 3.

// Написать функцию, которая создает пустой объект, но без прототипа.


function emptyObjectNoPrototype() {

  let nullObject = Object.create(null); // создаем объект с прототипом null

  return nullObject;
}

console.log(emptyObjectNoPrototype());