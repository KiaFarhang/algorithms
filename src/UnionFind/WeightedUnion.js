// @flow

'use strict';

import UnionFindObject from './UnionFindObject';

export default class WeightedUnion {
    constructor(n) {
        this.data = [];

        for (let i = 0; i < n; i++) {
            this.data.push(new UnionFindObject(i, i));
        }
    }

    connected(p, q) {
        return this.find(this.data[p].id) === this.find(this.data[q].id);
    }

    find(p) {
        let count = 1;
        while (this.data[p].id !== this.data[p].component) {
            p = this.data[this.data[p].id].component;
            count++;
            this.data[p].componentLength = count;
            // console.log(this.data[p], this.data[p].componentLength);
        }
        return p;
    }

    union(p, q) {
        let pRoot = this.find(this.data[p].id);
        let qRoot = this.find(this.data[q].id);

        if (this.data[pRoot].componentLength > this.data[qRoot].componentLength) {
            this.data[qRoot].component = this.data[pRoot].component;
        } else {
            this.data[pRoot].component = this.data[q].component;
        }
    }
}