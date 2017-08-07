import { Iterable } from '../Interfaces/Iterable';

export class Deque<T> implements Iterable{
	private items: T[];

	constructor(){
		this.items = [];
	}

	[Symbol.iterator](){
		let counter: number = 0;
		let data: T[] = this.items;
		return{
			next(){
				return { done: counter === data.length, value: data[counter++] }
			}
		}
	}

	isEmpty(): boolean{
		return this.items.length === 0;
	}

	size(): number{
		return this.items.length;
	}

	addFirst(item: T): void{
		this.items.unshift(item);
	}

	addLast(item: T): void{
		this.items.push(item);
	}

	removeFirst(): T{
		return this.items.shift();
	}

	removeLast(): T{
		return this.items.pop();
	}
}