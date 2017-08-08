import { Iterable } from '../Interfaces/Iterable';

export class RandomizedQueue<T> implements Iterable{
	private items: T[];

	constructor(){
		this.items = [];
	}

	[Symbol.iterator](){
		let usedIndices: number[] = [];
		let data: T[] = this.items;
		let randomizer: Function = this.getRandomInt;
		return{
			next(){
				if (usedIndices.length === data.length) return {done: true, value: undefined};
				let randomIndex = randomizer(0, data.length);
				while (usedIndices.indexOf(randomIndex) !== -1){
					randomIndex = randomizer(0, data.length);
				}

				usedIndices.push(randomIndex);

				return { done: usedIndices.length > data.length, value: data[randomIndex]};
			}
		}
	}

	isEmpty(): boolean{
		return this.items.length === 0;
	}

	size(): number{
		return this.items.length;
	}

	enqueue(item: T): void{
		this.items.push(item);
	}

	dequeue(): T{
		let index: number = this.getRandomInt(0, this.items.length);
		return this.items.splice(index, 1)[0];
	}

	sample(): T{
		let index: number = this.getRandomInt(0, this.items.length);
		return this.items[index];
	}

	private getRandomInt(min, max): number{
		return Math.floor(Math.random() * (max - min )) + min;
	}
}