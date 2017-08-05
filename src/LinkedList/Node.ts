export class Node {
	item: any;
	next: Node;
	
	constructor(item: any){
		this.item = item;
		this.next = null;
	}
}