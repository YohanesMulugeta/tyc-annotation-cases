// this is annotation we are telling TS that we aregoing to assign a value of number only to the variable
let apples = 5;
apples = 10;

let speed = 'Fast';
// speed = 39 //throws an error

let hasName = true;

let nothingMatch = null;
let nothing = undefined;

// Built in objects
let now = new Date();
// now = 'lala'

// Array

let colors = ['red', 'blue', 55, new Date()];
let numbers = [4, 3, 2];
let dates = [new Date()];

// Class
class Car {}
class Plane {}

let mercedes = new Car();

// Object literal
let point = { x: 10, y: 20 };

// function
const logNumber = (i) => {
  console.log(i);
};

// When to use annotations?
// 1) when a function return an 'any' type

const json = '{"x": 10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) when we want to declare on one line and initialize it on another
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

words.forEach((word) => {
  word === 'green' && (foundWord = true);
});

// 3)variable whose type cannot be inferred
const numbersArr = [5, -20, -10];
let nuberAboveZero: boolean | number = false;

numbersArr.forEach((num) => {
  num > 0 && (nuberAboveZero = num);
});
