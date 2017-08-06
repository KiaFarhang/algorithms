import { Iterable } from '../Interfaces/Iterable';
import { Node } from './Node';

export class LinkedListStack<T> {
    private top: Node;
    
    constructor() {
        this.top = null;
    }

    [Symbol.iterator](){
        let current: Node = this.top;
        return{
            next(){
                let toReturn: Node = current;
                
                if (current === null){
                    return {done: true, value: toReturn};
                }else{
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

    pop(): T{
    	let toReturn: any = this.top.item;
    	this.top = this.top.next;
    	return toReturn;
    }

    isEmpty(): boolean{
        return this.top === null;
    }
}