// @flow

'use strict';

export default class UnionFindObject{
	constructor(id, component){
		this.id = id;
		this.component = component;
	}

	setComponent(component){
		this.component = component;
	}
}