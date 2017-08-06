import { Iterable } from '../Interfaces/Iterable';

export class Stack<T> implements Iterable{
	private items: Array<T>;
	
	constructor(){
		this.items = [];
	}

	[Symbol.iterator](){
		let counter: number = this.items.length -1;
		let data: T[] = this.items;
		return {
			next(){
				return {done: counter < 0 ? true : false, value: data[counter--]};
			}
		}
	}

	push(item: T): void{
		this.items.push(item);
	}

	pop(): T{
		return this.items.pop();
	}

	isEmpty(): boolean{
		return this.items.length === 0;
	}

	size(): number{
		return this.items.length;
	}
}