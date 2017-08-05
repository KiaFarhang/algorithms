import { Iterable } from '../Interfaces/Iterable';

export class Bag<T> implements Iterable {
    private items: T[];
    
    constructor() {
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

    add(item: T): void {
        this.items.push(item);
    }

    isEmpty(): boolean{
        return this.items.length === 0;
    }

    size(): number{
        return this.items.length;
    }
}