import { User, UserProps } from './models/User';
import axios from 'axios';
import { Collection } from './models/Collection';

// const user = User.buildUser({ id: 1 });

// user.on('change', () => {
//   console.log(user);
// });

// user.fetch();

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
