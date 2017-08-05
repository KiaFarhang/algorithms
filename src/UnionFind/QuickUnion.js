// @flow

'use strict';

import UnionFindObject from './UnionFindObject';

export default class QuickUnion {
    constructor(n) {
        this.data = [];

        for (let i = 0; i < n; i++) {
            this.data.push(new UnionFindObject(i, i));
        }
    }

    connected(p, q) {
        return this.find(this.data[p].id) === this.find(this.data[q].id);
    }

    find(p){
    	if(this.data[p].component === this.data[p].id){
    		return this.data[p].component;
    	}else{
    		return this.find(this.data[p].component);
    	}
    }

    union(p, q){
    	let pRoot = this.find(this.data[p].id);

    	this.data[pRoot].component = this.data[q].component;
    }
}
