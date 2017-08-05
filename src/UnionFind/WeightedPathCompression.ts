import { UnionFindObject } from './UnionFindObject';
import { Stack } from '../Basics/Stack';

export default class WeightedPathCompression {
    data: any[];
    
    constructor(n: number) {
        this.data = [];

        for (let i: number = 0; i < n; i++) {
            this.data.push(new UnionFindObject(i, i));
        }
    }

    connected(p: number, q: number): boolean {
        return this.find(this.data[p].id) === this.find(this.data[q].id);
    }

    find(p: number) {
        let count: number = 1;
        let touchedNodes = new Stack();
        while (this.data[p].id !== this.data[p].component) {
            touchedNodes.push(this.data[p].id);
            p = this.data[this.data[p].id].component;
            count++;
            this.data[p].componentLength = count;
        }
        while (touchedNodes.size() > 0){
            let node: any = touchedNodes.pop();
            this.data[node].component = p;
        }
        return p;
    }

    union(p: number, q: number): void {
        let pRoot = this.find(this.data[p].id);
        let qRoot = this.find(this.data[q].id);

        if (this.data[pRoot].componentLength > this.data[qRoot].componentLength) {
            this.data[qRoot].component = this.data[pRoot].component;
        } else {
            this.data[pRoot].component = this.data[q].component;
        }
    }
}