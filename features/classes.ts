class Vehical {
  constructor(public color: string = 'red') {}

  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

// const vehicle = new Vehical();
// vehicle.drive();
// vehicle.honk();

class Car extends Vehical {
  drive(): void {
    console.log('vroom');
  }
}

const car = new Car('blue');
car.drive();
console.log(car.color);
