import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
const numbersCollection = new NumbersCollection([1000, 3, -5, 0, -2]);
const charactersCollection = new CharactersCollection('xaayb');
const sorter = new Sorter(charactersCollection);
sorter.sort();
// console.log(numbersCollection.data);
console.log(charactersCollection);
