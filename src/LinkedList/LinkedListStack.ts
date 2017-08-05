import { Node } from './Node';

export class LinkedListStack {
    first: Node;
    
    constructor() {
        this.first = null;
    }

    push(item: any): void {
    	let node = new Node(item);
        let oldFirst: Node = this.first;
        this.first = node;
        this.first.next = oldFirst;
    }

    pop(): any{
    	let toReturn: any = this.first.item;
    	this.first = this.first.next;
    	return toReturn;
    }

    isEmpty(): boolean{
        return this.first === null;
    }
}