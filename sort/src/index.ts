import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollections';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([-14, 5, 3, 1]);
const sorter_numbers = new Sorter(numbers);
sorter_numbers.sort();
console.log(sorter_numbers);

const charaters = new CharactersCollection('CBAask');
const sorter_charaters = new Sorter(charaters);
sorter_charaters.sort();
console.log(sorter_charaters);

const list = new LinkedList();
list.add(1);
list.add(4);
list.add(-6);
list.add(-3);
const sorter_list = new Sorter(list);
sorter_list.sort();
list.print();
