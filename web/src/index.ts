import { User } from './models/User';

const user = new User({ id: 1 });
user.set({ name: 'fuck', age: 400 });
user.save();

const user2 = new User({ name: 'John' });
user2.save();
