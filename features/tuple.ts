const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// tuple, fixed order of elements in this array
const pepsi: [string, boolean, number] = ['brown', true, 40];

type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 30];
