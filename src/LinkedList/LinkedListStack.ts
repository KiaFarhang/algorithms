import { Iterable } from '../Interfaces/Iterable';
import { Node } from './Node';

export class LinkedListStack<T> implements Iterable {
    private top: Node;
    
    constructor() {
        this.top = null;
    }

    [Symbol.iterator](){
        let current: Node = this.top;
        return{
            next(){
                if (current === null){
                    return {done: true, value: undefined};
                }else{
                    let toReturn: T = current.item;
                    current = current.next;                    
                    return {done: false, value: toReturn};
                }
            }
        }
    }

    push(item: T): void {
    	let node = new Node(item);
        let oldtop: Node = this.top;
        this.top = node;
        this.top.next = oldtop;
    }

    pop(): T | null{
        if (this.top === null) return null;
        
    	let toReturn: T = this.top.item;
    	this.top = this.top.next;
    	return toReturn;
    }

    isEmpty(): boolean{
        return this.top === null;
    }
}