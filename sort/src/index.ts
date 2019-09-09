import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollections';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([-14, 5, 3, 1]);
numbers.sort();
console.log(numbers.data);

const link = new LinkedList();
link.add(1);
link.add(3);
link.add(-1);
link.add(4);
link.sort();
link.print();

const c = new CharactersCollection('fuck');
c.sort();
console.log(c.data)