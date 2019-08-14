const dates = [new Date(), new Date()];

const cars = ['toyota', 'honda'];
// use annotation when initializing empty array
const carMakers: string[] = [];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camero']];

// help with inference when extracting values
const myCar = cars[0];

// prevent incompatible values
carMakers.push(100);

// help with map()
carMakers.map(car => {
  return car;
});

// flexible types
const importantDates = [new Date(), '2012-12-21'];
const importantDates2: (Date | string)[] = [new Date()];
importantDates2.push('hello');
