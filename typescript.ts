// document.body.style.backgroundColor = "black"

function greet(name: string): string{
  return `Hello ${name}`;
}

console.log(greet("Jason"));

const names: string = "Jasonato445";
const array: string[] = ['help', 'assist', 'aid', 'rescue'];
const isChecked: boolean = false;


function sum(x: number, y: number): number{
  return x + y;
}


function greeting(named: string, greeting: string = "Hello"):string {
  return ` ${greeting} ${named}`
}

console.log(names, array, isChecked, sum(1, 3), greeting("Preye"));

// interfaces

interface person{
  name: string,
  age: number,
  isFast: boolean,
  drive: Function,
}

const me: person = {
  name: "Jason",
  age: 23,
  isFast: true,
  drive() {
    return this.age + this.name
  }

}

console.log(me.drive())

class Car{

  brand: string;
  year: number;
  constructor(brand: string, year: number) {
    this.brand = brand;
      this.year = year;
  }

  displayInfo() {
    return this.brand + this.year;
  }
}

const newCar = new Car("Toyota", 1993);

console.log(newCar.year, newCar.displayInfo());

function printId(id: number | string) {
  if (typeof id === 'string') {
    console.log(`id: ${id.toUpperCase()}`)
    return;
  }
  console.log(`id: ${id}`)
}

printId(2)
printId("menubar");


let hidden: unknown = "false";

console.log(typeof (hidden));

interface Rect{
  getArea(): number
}

class Rectangle implements Rect{
  public width: number;
  public height: number;
  public constructor(width:number, height:number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number{
    return this.width * this.height;
  }
}

const person: Rectangle = new Rectangle(30, 20);

// console.log(person.width, typeof person);

class Square extends Rectangle{
  constructor(width: number) {
    super(width, width)
  }
}

const person1: Square = new Square(4)

console.log(person1.getArea());


interface wrapped<t, s>{
  name: t | undefined;
  age: s | undefined;
}

const merchant: wrapped<string, number> = {
  name: "Jason",
  age: 23,
}

console.log(merchant.name);

type Jom<m> = m | undefined

let monseiur: Jom<string> = "Hey There";

console.log(monseiur)

type vars<s> = s | undefined

let monkey: vars<string> = "what is going on here?";

console.log(monkey);

interface Carp{
  name: string,
  age: number,
}

let cars: Required<Carp> = {
  name: "",
  age: 0
}
cars.name = "demo";
cars.age = 40
console.log(cars)

interface Man<s, n>{
  name: s,
  age: n,
}

let you: Man<string, number> = {
  name: "Jason",
  age: 23,
}

console.log(you)

function LoggerFunc(msg: string) {
  return function Logger(target: Function) {
    console.log(msg)
  }
}

function decorateFactory(template: string): Function{
  
  return function (target: any) {
    return class extends target {
      constructor(...args: any[]) {
        super(...args);
      
        let elem = document.getElementById('man')
        if (!elem) {
           elem = document.createElement('div')
          elem.id = "man"
          document.body.append(elem)
        }
          elem.innerHTML = template;
          let h2 = elem.querySelector('h2');
          if (h2) {
            
            h2.innerHTML = "Hello Mr. " + this.user;
          }
        

      }
    }
  }
  
}




@LoggerFunc("Hello there, this is Sensational!!")
@decorateFactory('<h2>Hello There</h2>')
class Printer{
    user: string;
    age: number;

  constructor(user: string, age: number) {
    this.user = user;
    this.age = age;
    console.log("user logged in currently")
  }
}

const yours = new Printer("Jason", 30);
const yourss = new Printer("Lois", 34);
const yourssa = new Printer("Preye", 34);
const yourssac = new Printer("Peye", 34);

console.log(yours)


function decorated(target:any, propertyKey: string) {
  let value: string;

  Object.defineProperty(target, propertyKey, {
    get: function() {
      return value;
    },

    set: function(newValue) {
      return value = newValue.charAt(0).toUpperCase() + newValue.slice(1).toLowerCase();
    }, 

    enumerable: true,

    configurable: true,
  })
  
}

class Product{

  @decorated
  name!: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

 
}

let fresh = new Product("john", 30)
let fresh1 = new Product("MARTHA", 30)

// fresh.theNamed = "marhomark"
// console.log(fresh.named)
console.log(fresh)
