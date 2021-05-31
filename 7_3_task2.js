
// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.Функция должна возвращать true или false.

function findStringInObject(object, string) {
  let res;

  res = (string in object);

  return res;
}

const user = {
  name: 'Andrei',
  surname: 'Ivanov',
  age: 18,
  position: 'developer',
};

console.log(findStringInObject(user, 'age'));