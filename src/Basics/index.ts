export class Queue<T> {
	items: Array<T>;

	constructor(){
		this.items = [];
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

export class Bag<T> {
    items: Array<T>;
    
    constructor() {
        this.items = [];
    }

    add(item: T) {
        this.items.push(item);
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}