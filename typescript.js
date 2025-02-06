"use strict";
// document.body.style.backgroundColor = "black"
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let you = {
    name: "Jason",
    age: 23,
};
console.log(you);
function LoggerFunc(msg) {
    return function Logger(target) {
        console.log(msg);
    };
}
function decorateFactory(template) {
    return function (target) {
        return class extends target {
            constructor(...args) {
                super(...args);
                let elem = document.getElementById('man');
                if (!elem) {
                    elem = document.createElement('div');
                    elem.id = "man";
                    document.body.append(elem);
                }
                elem.innerHTML = template;
                let h2 = elem.querySelector('h2');
                if (h2) {
                    h2.innerHTML = "Hello Mr. " + this.user;
                }
            }
        };
    };
}
let Printer = class Printer {
    constructor(user, age) {
        this.user = user;
        this.age = age;
        console.log("user logged in currently");
    }
};
Printer = __decorate([
    LoggerFunc("Hello there, this is Sensational!!"),
    decorateFactory('<h2>Hello There</h2>')
], Printer);
const yours = new Printer("Jason", 30);
const yourss = new Printer("Lois", 34);
const yourssa = new Printer("Preye", 34);
const yourssac = new Printer("Peye", 34);
console.log(yours);
function decorated(target, propertyKey) {
    let value;
    Object.defineProperty(target, propertyKey, {
        get: function () {
            return value;
        },
        set: function (newValue) {
            return value = newValue.charAt(0).toUpperCase() + newValue.slice(1).toLowerCase();
        },
        enumerable: true,
        configurable: true,
    });
}
class Product {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
__decorate([
    decorated
], Product.prototype, "name", void 0);
let fresh = new Product("john", 30);
let fresh1 = new Product("MARTHA", 30);
// fresh.theNamed = "marhomark"
// console.log(fresh.named)
console.log(fresh);
