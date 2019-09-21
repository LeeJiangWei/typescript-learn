import { User } from './models/User';

const user = new User({ id: 1, name: 'smzsb' });

user.on('change', () => {
  console.log(user);
});

user.on('save', () => {
  console.log('saved');
});

user.save();
