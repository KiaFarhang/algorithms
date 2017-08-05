




// let data = [
//     [4, 3],
//     [3, 8],
//     [6, 5],
//     [9, 4],
//     [2, 1],
//     [8, 9],
//     [5, 0],
//     [7, 2],
//     [6, 1],
//     [1, 0],
//     [6, 7]
// ];


// let data = createData(100000);

// console.time('union-find');

// let UF = new QuickFind(100000);


// data.forEach((test) => {
//     if (UF.connected(test[0], test[1]) === false) {
//         UF.union(test[0], test[1]);
//         // console.log(`union: ${test[0]}-${test[1]}`);
//     }
// });

// console.timeEnd('union-find');

// console.time('quick union');

// let quickUnion = new QuickUnion(100000);

// data.forEach((item) => {
//     if (quickUnion.connected(item[0], item[1]) === false) {
//         quickUnion.union(item[0], item[1]);
//         // console.log(`union: ${item[0]}-${item[1]}`);
//     }
// });

// console.timeEnd('quick union');

// console.time('weighted quick union');

// let weightedUnion = new WeightedUnion(10000000);

// data.forEach((item) => {
//     if (weightedUnion.connected(item[0], item[1]) === false) {
//         weightedUnion.union(item[0], item[1]);
//         // console.log(`union: ${item[0]}-${item[1]}`);
//     }
// });

// console.timeEnd('weighted quick union');

// console.time('weighted union with path compression');

// let wpc = new WeightedPathCompression(100000);

// data.forEach((item) => {
//     if (wpc.connected(item[0], item[1]) === false) {
//         wpc.union(item[0], item[1]);
//         // console.log(`union: ${item[0]}-${item[1]}`);
//     }
// });

// console.timeEnd('weighted union with path compression');


// function runPercolationSimulation(size: number, simulations: number) {
//     let arrayOfP = [];

//     for (let i = 0; i < simulations; i++) {
//         let perc = new Percolation(size);
//         arrayOfP.push(perc.run());
//     }

//     let sumOfP = arrayOfP.reduce((sum, value) => {
//         return sum + value;
//     }, 0);

//     return sumOfP / simulations;
// }



// function createData(n) {
//     let data = [];

//     for (let i = 0; i < n; i++) {
//         let a = 0;
//         let b = 0;

//         while (a === b) {
//             a = Math.floor(getRandomArbitrary(0, n));
//             b = Math.floor(getRandomArbitrary(0, n));
//         }
//         data.push([a, b]);
//     }

//     return data;
// }

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }

// //LINKED LIST

// //Linked List Stack

// console.time('test');

// // const linkedStack = new LinkedListStack();

// // linkedStack.push(55);

// // linkedStack.push(1);

// // linkedStack.pop();

// // console.log(linkedStack);

// //Linked List Queue

// const linkedQueue = new LinkedListQueue();

// linkedQueue.enqueue(55);

// linkedQueue.enqueue(1);

// linkedQueue.enqueue(500);

// linkedQueue.enqueue(14);

// console.log(linkedQueue.dequeue());

// console.log(linkedQueue);

// console.timeEnd('test');






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
//  let oldLast = third;
//  third = new Node();

//  third.item = 'not';
//  oldLast.next = third;

//  console.log(first, second, oldLast, third);
// }

// const myQueue = new Queue;

// myQueue.enqueue(5);
// myQueue.enqueue(10);



// console.log(myQueue.size());

// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());

// console.log(myQueue.isEmpty());


// const myStack = new Stack;

// myStack.push(5);
// myStack.push(10);

// console.log(myStack.pop());
// console.log(myStack.pop());

// console.log(myStack.isEmpty());