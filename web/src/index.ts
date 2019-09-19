import { User } from './models/User';

const user = new User({ name: 'alex', age: 20 });

user.on('change', () => {});
user.on('change', () => {});
user.on('changegegegeg', () => {});

console.log(user);
