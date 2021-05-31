/*
Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.
*/

class Device {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
  deviceOn() {
    console.log(`${this.name} работает. Мощность: ${this.power} Вт`);
  }
  deviceOff() {
    console.log(`${this.name} не работает`);
  }
}

class Сomputer extends Device {
  constructor(name, power, manufacturer, price, cpu, ram, hdd) {
    super(name, power);
    this.manufacturer = manufacturer;
    this.price = price;
    this.cpu = cpu;
    this.ram = ram;
    this.hdd = hdd;
  }
  characteristicsPrint() {
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

class Lamp extends Device {
  constructor(name, power, price, classification, colorRenderingIndex, colorfulTemperature) {
    super(name, power);
    this.price = price;
    this.classification = classification;
    this.colorRenderingIndex = colorRenderingIndex;
    this.colorfulTemperature = colorfulTemperature;
  }
  characteristicsPrint() {
    console.log(`Лампа:
    - название: "${this.name}"
    - мощность: ${this.power} Вт
    - цена: ${this.price} руб.
    - классификация: ${this.classification}
    - коэффициент цветопередачи: ${this.colorRenderingIndex} 
    - цветовая температура: ${this.colorfulTemperature} К`);
  }
}

// Экземпляр компьютера
let computerNotebook = new Сomputer("Ноутбук Yoga Creator", 65, "Lenovo", 80000, "Intel Core i7", 16, 1);
// Экземпляр лампы
let readingLamp = new Lamp("Настольная лампа Odeon Light", 6, 5000, "Светодиодная", 70, 3000);

computerNotebook.characteristicsPrint(); // Вывод характеристик компьютера
computerNotebook.deviceOn(); // Включение компьютера
readingLamp.characteristicsPrint(); // Вывод характеристик лампы
readingLamp.deviceOff(); // Выключение лампы
