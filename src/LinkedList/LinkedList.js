// @flow
'use strict';

import 'babel-polyfill';
import Queue from './Queue';
import Stack from './Stack';
import Node from './Node';

import LinkedListStack from './LinkedListStack';

//LINKED LIST

//Linked List Stack

const linkedStack = new LinkedListStack();

console.log(linkedStack.stack.items);


// let first = new Node();
// first.item = 'to';

// let second = new Node();
// second.item = 'be';
// first.next = second;

// let third = new Node();
// third.item = 'or';
// second.next = third;

// console.log(first, second, third);

// //Insert at the beginning
// {
//     let oldFirst = first;

//     first = new Node();
//     first.item = 'not';
//     first.next = oldFirst;

//     console.log(first, oldFirst, second, third);
// }
// //Remove from the beginning
// {
//     first = first.next;

//     console.log(first, second, third);
// }

// //Insert at the end
// {
// 	let oldLast = third;
// 	third = new Node();

// 	third.item = 'not';
// 	oldLast.next = third;

// 	console.log(first, second, oldLast, third);
// }