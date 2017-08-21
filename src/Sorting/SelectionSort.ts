import { SortObject } from './SortObject';

export class SelectionSort<T>{
	items: SortObject<T>[];
	smallestItem: SortObject<T>;

	public static sort(array: SortObject<any>[]): SortObject<any>[]{
		for (let i: number = 0; i < array.length; i++){
			let smallestValue: SortObject<any> = array[i];
			let indexToSwap: number = i;
			for(let j: number = i+1; j < array.length; j++){
				if(this.less(array[j],smallestValue)){
					smallestValue = array[j];
					indexToSwap = j;
				}
			}

			this.exchange(array, i, indexToSwap);
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