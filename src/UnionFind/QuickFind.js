// @flow

'use strict';

import UnionFindObject from './UnionFindObject';

export default class UnionFind {
    constructor(n) {
        this.data = [];

        for (let i = 0; i < n; i++) {
            this.data.push(new UnionFindObject(i, i));
        }
    }

    connected(p, q) {
        return this.data[p].component === this.data[q].component;
    }

    union(p, q) {

    	let o = this.data[p].component;
    	let n = this.data[q].component;

        this.data.forEach((object) => {
            if (object.component === o) {
                object.component = n;
            }
        })
    }
}
