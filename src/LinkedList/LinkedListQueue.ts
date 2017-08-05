import { Node } from './Node';

export class LinkedListQueue {
    first: Node;
    last: Node;
    constructor() {
        this.first = null;
    }

    enqueue(item: any): void {
        let node = new Node(item);
        if (this.first === null){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }    
    }

    dequeue(): any{
        let toReturn: any = this.first.item;
        this.first = this.first.next;
        return toReturn;
    }
}
