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
        const rootP = this.find(this.data[p].id, 1).id;
        const rootQ = this.find(this.data[q].id, 1).id;

        return rootP === rootQ;
    }

    find(p, count) {
        if (this.data[p].component === this.data[p].id) {
            return { id: this.data[p].id, count: count };
        } else {
            return this.find(this.data[p].component, count + 1);
        }
    }

    union(p, q) {
        let pRoot = this.find(this.data[p].id, 1);
        let qRoot = this.find(this.data[q].id, 1);

        if (pRoot.count > qRoot.count) {
            this.data[qRoot.id].component = this.data[pRoot.id].component;
        } else {
            this.data[pRoot.id].component = this.data[qRoot.id].component;
        }

    }
}