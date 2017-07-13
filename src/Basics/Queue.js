//@flow

'use strict';

class Queue {

	constructor(){
		this.items = [];
	}

	enqueue(item: any){
		this.items.push(item);
	}

	dequeue(){
		return this.items.shift();
	}

	isEmpty(){
		return this.items.length === 0;
	}

	size(){
		return this.items.length;
	}
    
}

export default Queue;
