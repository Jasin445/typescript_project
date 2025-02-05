"use strict";
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet("Jason"));
const names = "Jasonato445";
const array = ['help', 'assist', 'aid', 'rescue'];
const isChecked = false;
function sum(x, y) {
    return x + y;
}
function greeting(named, greeting = "Hello") {
    return ` ${greeting} ${named}`;
}
console.log(names, array, isChecked, sum(1, 3), greeting("Preye"));
const me = {
    name: "Jason",
    age: 23,
    isFast: true,
    drive() {
        return this.age + this.name;
    }
};
console.log(me.drive());
class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    displayInfo() {
        return this.brand + this.year;
    }
}
const newCar = new Car("Toyota", 1993);
console.log(newCar.year, newCar.displayInfo());
function printId(id) {
    if (typeof id === 'string') {
        console.log(`id: ${id.toUpperCase()}`);
        return;
    }
    console.log(`id: ${id}`);
}
printId(2);
printId("menubar");
let hidden = "false";
console.log(typeof (hidden));
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const person = new Rectangle(30, 20);
// console.log(person.width, typeof person);
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
}
const person1 = new Square(4);
console.log(person1.getArea());
const merchant = {
    name: "Jason",
    age: 23,
};
console.log(merchant.name);
let monseiur = "Hey There";
console.log(monseiur);
let monkey = "what is going on here?";
console.log(monkey);
let cars = {
    name: "",
    age: 0
};
cars.name = "demo";
cars.age = 40;
console.log(cars);
