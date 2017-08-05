export class Bag<T> {
    private items: T[];
    
    constructor() {
        this.items = [];
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