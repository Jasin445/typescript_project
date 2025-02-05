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