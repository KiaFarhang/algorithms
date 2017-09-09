import { SortObject } from './SortObject';

export class MergeSort {


    public static merge(a: SortObject<any>[], lo: number, mid: number, hi: number): void {
        let x: number = 0;
        let y: number = mid + 1;

        let newArray = [];

        while (x <= lo && y <= hi) {
            console.log(x, y);
            if (this.less(a[x], a[y])) {
                newArray.push(a[x]);
                x++;
            } else {
                newArray.push(a[y]);
                y++;
            }
        }
        console.log(newArray);
    }

    private static less(a: SortObject<any>, b: SortObject<any>): boolean {
        return a.compare(b) < 0;
    }
}