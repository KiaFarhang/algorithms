import { Stack } from './Basics/Stack';
import { Bag } from './Basics/Bag';
import { Queue } from './Basics/Queue';
import { Deque } from './Basics/Deque';
import { RandomizedQueue } from './Basics/RandomizedQueue';
import { Permutation } from './Basics/Permutation';
import { LinkedListStack } from './LinkedList/LinkedListStack';
import { LinkedListQueue } from './LinkedList/LinkedListQueue';

let string = 'a b c d e f g';

let perm = new Permutation();

perm.permutate(3, string);