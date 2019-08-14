const profile = {
  firstname: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// annotation in ES2015 destructuring object
const { age, firstname }: { age: number; firstname: string } = profile;

const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
