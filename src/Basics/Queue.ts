import { Iterable } from '../Interfaces/Iterable';

export class Queue<T> implements Iterable {
	private items: T[];

	constructor(){
		this.items = [];
	}

	[Symbol.iterator](){
		let counter = 0;
		let data = this.items;

		return{
			next(){
				return {done: counter === data.length ? true : false, value: data[counter++]};
			}
		}
	}

	enqueue(item: T): void{
		this.items.push(item);
	}

	dequeue(): T{
		return this.items.shift();
	}

	isEmpty(): boolean{
		return this.items.length === 0;
	}

	size(): number{
		return this.items.length;
	}
    
}
