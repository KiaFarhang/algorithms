export class Iterator{
	step: number;

	constructor(){
		this.step = 0;
	}

	[Symbol.iterator](){
		return this;
	}
	next(){
		this.step++;

		if(this.step === 1){
			return {value: 'Kia'};
		}else if(this.step === 2){
			return {value: 'Annie'};
		}

		return {done: true};
	}
}