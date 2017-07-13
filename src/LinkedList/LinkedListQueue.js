//@flow

'use strict';

import Queue from './Queue';

export default class LinkedListQueue {
    constructor() {
        this.queue = new Queue();
        this.first = null;
        this.last = null;
    }

    enqueue(item: any) {
        this.queue.enqueue({
            item: item,
            next: null
        });

        if (this.queue.items.length >= 2) {
            let previousItem = this.queue.items[this.queue.items.length - 2];
            previousItem.next = this.queue.items[this.queue.items.length - 1];
        }

        this.AssignFirstAndLast();
    }

    AssignFirstAndLast() {
        this.first = this.queue.items[0];
        this.last = this.queue.items[this.queue.items.length - 1];
    }

    dequeue() {
        const toReturn = this.queue.dequeue();
        this.AssignFirstAndLast();

        return toReturn;
    }
}
