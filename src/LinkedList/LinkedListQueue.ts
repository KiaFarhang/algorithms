import { Iterable } from '../Interfaces/Iterable';
import { Node } from './Node';

export class LinkedListQueue<T> implements Iterable{
     private first: Node;
     private last: Node;
    
    constructor() {
        this.first = null;
    }

    [Symbol.iterator](){
        let current: Node = this.first;
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

    enqueue(item: T): void {
        let node = new Node(item);
        if (this.first === null){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }    
    }

    dequeue(): T | null{
        if (this.first === null) return null;
        
        let toReturn: T = this.first.item;
        this.first = this.first.next;
        return toReturn;    
        
    }
}
