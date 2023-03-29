// this is annotation we are telling TS that we aregoing to assign a value of number only to the variable
let apples: number = 5;
apples = 10;

let speed: string = 'Fast';
// speed = 39 //throws an error

let hasName: boolean = true;

let nothingMatch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();
// now = 'lala'

// Array

let colors: string[] = ['red', 'blue'];
let numbers: number[] = [4, 3, 2];
let dates: Date[] = [new Date()];

// Class
class Car {}
class Plane {}

let mercedes: Car = new Car();

// Object literal
let point: { x: number; y: number } = { x: 10, y: 20 };

// function
const logNumber: (I: number) => void = (i: number) => {
  console.log(i);
};
