//@flow

'use strict';

class Bag {
    constructor() {
        this.items = [];
    }

    add(item: any) {
        this.items.push(item);
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

export default Bag;
