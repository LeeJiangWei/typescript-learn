import { User } from './models/User';

const user = new User({ name: 'smz' });

user.events.on('change', () => {
  console.log('changed!');
});
user.events.trigger('change');
