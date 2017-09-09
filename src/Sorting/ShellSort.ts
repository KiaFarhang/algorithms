import { SortObject } from './SortObject';

export class ShellSort {

	public static sort(array: SortObject<any>[]): SortObject<any>[] {
		// This is a list of "best h values" I got from Stack Overflow:
		// https://stackoverflow.com/questions/2539545/fastest-gap-sequence-for-shell-sort
		const arrayOfH: number[] = [1750, 701, 301, 132, 57, 23, 10, 4, 1];

		for (let h = 0; h < arrayOfH.length; h++) {
			let gap = arrayOfH[h];
			for (let i = gap; i < array.length; i++) {
				for (let j = i; j >= gap && this.less(array[j], array[j - gap]); j -= gap) {
					this.exchange(array, j, j - gap);
				}
			}
		}

		return array;
	}

	private static less(a: SortObject<any>, b: SortObject<any>): boolean {
		return a.compare(b) < 0;
	}

	private static exchange(array: SortObject<any>[], i: number, j: number): void {
		const swap: SortObject<any> = array[i];
		array[i] = array[j];
		array[j] = swap;
	}
}