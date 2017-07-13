//@flow

'use strict';

class Stack {

	constructor(){
		this.items = [];
	}

	push(item: any){
		this.items.push(item);
	}

	pop(){
		return this.items.pop();
	}

	isEmpty(){
		return this.items.length === 0;
	}

	size(){
		return this.items.length;
	}
    
}

export default Stack;
