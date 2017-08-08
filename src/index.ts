import { Stack } from './Basics/Stack';
import { Bag } from './Basics/Bag';
import { Queue } from './Basics/Queue';
import { Deque } from './Basics/Deque';
import { RandomizedQueue } from './Basics/RandomizedQueue';
import { LinkedListStack } from './LinkedList/LinkedListStack';
import { LinkedListQueue } from './LinkedList/LinkedListQueue';

let rq = new RandomizedQueue<string>();

rq.enqueue('one');
rq.enqueue('two');
rq.enqueue('three');
rq.enqueue('four');
rq.enqueue('five');

for (let r of rq){
	console.log(r);
}

// for (let r of rq){
// 	console.log(r);
// }