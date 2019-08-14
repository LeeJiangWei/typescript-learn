// built in objects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'blue', 'green'];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// classes
class Car {}
let car: Car = new Car();

// object
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// function
const logNumber: (i: number) => void = i => {
  console.log(i);
};

// when to use annotations
// 1) function that returns 'any' type
// 2) delay assigment
// 3) type can't be inferred
