import { Comparable } from '../Interfaces/Comparable';

export class SortObject<T> implements Comparable<SortObject<T>>{
	value: T;

	constructor(value: T){
		this.value = value;
	}

	public compare(otherObject: SortObject<T>): number{
		if(this.value < otherObject.getValue()) return -1;
		else if(this.value === otherObject.getValue()) return 0;
		else if (this.value > otherObject.getValue()) return 1;
	}

	private getValue(): T{
		return this.value;
	}
}