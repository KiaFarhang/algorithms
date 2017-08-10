import { RandomizedQueue } from './RandomizedQueue';

export class Permutation{
	private randomQueue: RandomizedQueue<string>;

	constructor(){
		this.randomQueue = new RandomizedQueue<string>();
	}

	public permutate(n: number, item: string): void{
		let arrayOfItems = item.split(' ');

		arrayOfItems.forEach((thing: string)=>{
			this.randomQueue.enqueue(thing);
		});

		let arrayToPrint: string[] = [];

		for (let i = 0; i < n; i++){
			arrayToPrint.push(this.randomQueue.dequeue());
		}

		arrayToPrint.forEach((printItem: string)=>{
			console.log(printItem);
		});

	}
}