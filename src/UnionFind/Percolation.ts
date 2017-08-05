import {PercolationObject} from './PercolationObject';

export default class Percolation {
    sites: any[];
    
    constructor(n: number) {
        this.sites = [];

        for (let i = 0; i < Math.sqrt(n); i++) {
            this.sites.push([]);
            for (let j = 0; j < Math.sqrt(n); j++) {
                this.sites[i].push(new PercolationObject);
            }
        }
    }
    open(row: number, col: number): void {
        if (!this.sites[row][col].open) {
            this.sites[row][col].open = true;
            if (row === 0) {
                this.sites[row][col].full = true;
            }
        }

    }

    isOpen(row: number, col: number): boolean {
        return this.sites[row][col].open;
    }

    isFull(row: number, col: number): boolean {
        // console.log('isFull', row, col);
        //Assumes site[row][col] is open
        //If row = 0, it's full because you're at the top
        if (row === 0) {
            return true;
        }
        //Check if site[row-1][col] is full
        else if (this.sites[row - 1][col].open) {
            //Go up another level, etc.
            return this.isFull(row - 1, col);
        } //if site to site's left is >=0 and open
        else if (col >= 1 && this.sites[row][col - 1].open) {
            return this.isFull(row, col - 1);
        }
        //If you can't go left or up, you're not full
        else {
            return false;
        }
    }

    numberOfOpenSites(): number{
        let openSites: number = 0;

        for (let i: number = 0; i < this.sites.length; i++) {
            for (let j: number = 0; j < this.sites.length; j++) {
                if (this.isOpen(i, j)) {
                    openSites++;
                }
            }
        }

        return openSites;
    }

    percolates(): boolean {
        let n: number = this.sites.length;

        for (let i: number = n - 1; i > -1; i--) {
            if (this.isFull(n - 1, i)) return true;
        }

        return false;

    }

    run() {
        let n: number = this.sites.length;
        while (!this.percolates()) {

            //Get a random site
            let row: number = Math.floor(getRandomArbitrary(0, n - 1));
            let col: number = Math.floor(getRandomArbitrary(0, n - 1));

            //Get a new random site if this one is already open
            if (this.isOpen(row, col)) {
                let row: number = Math.floor(getRandomArbitrary(0, n - 1));
                let col: number = Math.floor(getRandomArbitrary(0, n - 1));
            }

            //Open the random site
            this.open(row, col);
        }

        //System now percolates

        let p: number = this.numberOfOpenSites() / Math.pow(n, 2);

        return p;

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }
    }
}