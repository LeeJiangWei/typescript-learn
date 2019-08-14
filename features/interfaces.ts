interface Reportable {
  summary(): string;
}

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
  // only check properties above, no limited to extra prope rties
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return 'hi';
  }
};

// function that not using interface
const printVehicle = (vehicle: {
  name: string;
  year: Date;
  broken: boolean;
}): void => {
  console.log(`Name:${vehicle.name}`);
  console.log(`Year:${vehicle.broken}`);
  console.log(`Broken?:${vehicle.broken}`);
};

// function that using interface
const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(`Name:${vehicle.name}`);
  console.log(`Year:${vehicle.broken}`);
  console.log(`Broken?:${vehicle.broken}`);
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printVehicle(oldCivic);
printVehicle2(oldCivic);
printSummary(oldCivic);
