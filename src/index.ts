import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
const numbersCollection = new NumbersCollection([1000, 3, -5, 0, -2]);
const charactersCollection = new CharactersCollection('sjvmofmvlskv');
const linkedList = new LinkedList();
linkedList.add(11);
linkedList.add(13);
linkedList.add(121);
linkedList.add(61);
linkedList.add(-11);

numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();
console.log(numbersCollection.data);
console.log(charactersCollection);
linkedList.print();
