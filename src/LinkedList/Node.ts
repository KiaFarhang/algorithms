export class Node {
	public item: any;
	public next: Node;
	
	constructor(item: any){
		this.item = item;
		this.next = null;
	}
}