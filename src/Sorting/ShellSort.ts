import { SortObject } from './SortObject';

export class ShellSort{

	public static sort(array: SortObject<any>[]): SortObject<any>[]{


		//This is an arbitrary list of "best h values" I got from Stack Overflow:
		//https://stackoverflow.com/questions/2539545/fastest-gap-sequence-for-shell-sort
		const arrayOfH: number[] = [1,4,10,23,57,132,301,701,1750];

		//Find the biggest number in arrayOfH that is smaller than array's length

		const usableH: number[] = arrayOfH.filter((h)=>{
			return h < array.length;
		});

		for(let i: number = usableH.length - 1; i >= 0; i--){
			let h: number = usableH[i];

			for(let j: number = 0; j < array.length - h; j++){
				for(let k: number = j+h; k < array.length; k+=h){
					if (this.less(array[k], array[j])){
						this.exchange(array, k, j);
					}
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