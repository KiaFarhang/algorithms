import { Stack } from './Basics/Stack';
import { Bag } from './Basics/Bag';
import { Queue } from './Basics/Queue';
import { LinkedListStack } from './LinkedList/LinkedListStack';
import { LinkedListQueue } from './LinkedList/LinkedListQueue';

import { Iterator } from './Basics/Iterator';

let iter = new Iterator();

let array = [{foo: 'bar'}, {bar: 'foo'}];

let iterator = array[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// let stack = new Stack<number>();

// stack.push(1);
// stack.push(2);
// stack.push(3);

// for (let stackItem of stack.items){
// 	console.log(stackItem);
// }

let queue = new Queue<string[]>();

queue.enqueue(['foo', 'bar']);

console.log(queue);


// theStack.push(5);
// // theStack.push('test');

// console.log(theStack);

// const myStack = new LinkedListStack();

// myStack.push(1);
// myStack.push(2);
// myStack.push(3);

// // console.log(myStack.pop());
// // console.log(myStack);

// const myQueue = new LinkedListQueue();

// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);

// enum Kids {'Sam', 'Mark', 'Bill'};

// let firstKid: string = Kids[0];

// console.log(firstKid);


