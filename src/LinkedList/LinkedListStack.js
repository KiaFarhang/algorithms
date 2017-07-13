//@flow

'use strict';

import Stack from './Stack';

class LinkedListStack {
	constructor(){
		this.stack = new Stack();
		this.top = null;
	}

	push(item: any){
		this.stack.push({
			item: item,
			next: this.stack.items.length !== 0 ? this.stack.items[this.stack.items.length-1] : null
		});

		this.top = this.stack.items[this.stack.items.length-1];
	}

	pop(){
		this.top = this.stack.items[this.stack.items.length - 2];

		return this.stack.pop();
	}

	isEmpty(){
		return this.stack.isEmpty();
	}

	size(){
		return this.stack.size();
	}
}

export default LinkedListStack;