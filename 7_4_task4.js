/*
Задание 4.

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.Реализуйте его на прототипах.
Определить иерархию электроприборов.Включить некоторые в розетку.Посчитать потребляемую мощность.
Таких приборов должно быть, как минимум, два(например, настольная лампа и компьютер).Выбрав прибор, подумайте, какими свойствами он обладает.

  План:
Определить родительскую функцию с методами, которые включают / выключают прибор из розетки;
1 Создать делегирующую связь[[Prototype]] для двух конкретных приборов;
2 У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
3 Создать экземпляры каждого прибора;
4 Вывести в консоль и посмотреть результаты работы, гордиться собой:)

  Общие требования:
1 Имена функций, свойств и методов должны быть информативными
2 Соблюдать best practices:
- использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
-информативные имена(а не a, b);
-четкая связь между классом и его экземплярами(класс описывает множество, а экземпляр конкретную реализацию);
-использование синтаксиса es6(кроме функции - конструкторов) и т.д.
*/

function Device(name, power) { // Родительская функция-конструктор
  this.name = name;
  this.power = power;

  this.deviceOn = function() {
    console.log(`${this.name} работает. Мощность: ${this.power} Вт`);
  }
  this.deviceOff = function() {
    console.log(`${this.name} не работает`);
  }
}

// Функция-конструктор для компьютера
function Сomputer(name, power, manufacturer, price, cpu, ram, hdd) { 
  this.name = name;
  this.power = power;
  this.manufacturer = manufacturer;
  this.price = price;
  this.cpu = cpu;
  this.ram = ram;
  this.hdd = hdd;
  this.characteristicsPrint = function () {
    console.log(`Компьютер:
    - название: "${this.name}"
    - мощность: ${this.power} Вт
    - производитель: ${this.manufacturer}
    - цена: ${this.price} руб.
    - процессор: ${this.cpu}
    - ОЗУ: ${this.ram} Гб
    - Жёсткий диск: ${this.hdd} Тб`);
  }
}

// Функция-конструктор для лампы
function Lamp(name, power, price, classification, colorRenderingIndex, colorfulTemperature) { 
  this.name = name;
  this.power = power;
  this.price = price;
  this.classification = classification;
  this.colorRenderingIndex = colorRenderingIndex;
  this.colorfulTemperature = colorfulTemperature;
  this.characteristicsPrint = function () {
    console.log(`Лампа:
    - название: "${this.name}"
    - мощность: ${this.power} Вт
    - цена: ${this.price} руб.
    - классификация: ${this.classification}
    - коэффициент цветопередачи: ${this.colorRenderingIndex} 
    - цветовая температура: ${this.colorfulTemperature} К`);
  }
}

// Заполняем прототипы компьютера и лампы
Сomputer.prototype = new Device(); 
Lamp.prototype = new Device();    
// console.log(Сomputer.prototype.deviceOn);

// Экземпляр компьютера
let computerNotebook = new Сomputer("Ноутбук Yoga Creator", 65, "Lenovo", 80000, "Intel Core i7", 16, 1);
// console.log(computerNotebook.deviceOn);


// Экземпляр лампы
let readingLamp = new Lamp("Настольная лампа Odeon Light", 6, 5000, "Светодиодная", 70, 3000);

computerNotebook.characteristicsPrint(); // Вывод характеристик компьютера
computerNotebook.deviceOn(); // Включение компьютера
readingLamp.characteristicsPrint(); // Вывод характеристик лампы
readingLamp.deviceOff(); // Выключение лампы
