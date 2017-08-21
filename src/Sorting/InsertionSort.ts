import { SortObject } from './SortObject';

export class InsertionSort{

	public static sort(array: SortObject<any>[]): SortObject<any>[]{
		for (let i: number = 1; i < array.length; i++){
			for(let j: number = i; j > 0; j--){
				if (this.less(array[j], array[j-1])){
					this.exchange(array, j, j-1);
				}
			}
		}

		return array;
	}

	private static less(a: SortObject<any>, b: SortObject<any>): boolean{
		return a.compare(b) < 0;
	}

	private static exchange(array: SortObject<any>[], i: number, j: number): void{
		const swap: SortObject<any> = array[i];
		array[i] = array[j];
		array[j] = swap;
	}
}