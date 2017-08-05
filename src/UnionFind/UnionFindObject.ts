export class UnionFindObject{
	id: number;
	component: any;
	componentLength: number;
	
	constructor(id, component){
		this.id = id;
		this.component = component;
		this.componentLength = 1;
	}
}