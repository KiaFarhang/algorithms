export class Stack<T> {
	private items: Array<T>;
	
	constructor(){
		this.items = [];
	}

	[Symbol.iterator](){
		let counter = 0;
		let data = this.items;
		return {
			next(){
				return {done: counter === data.length ? true : false, value: data[counter++]};
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