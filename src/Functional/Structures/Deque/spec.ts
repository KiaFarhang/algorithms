import 'mocha';
import * as chai from 'chai';
const assert = chai.assert;

import * as d from './index';

describe('Deque', () => {
    describe('deque', () => {
        it('returns an object with an items property', () => {
            const deque = d.deque<number>();
            assert.property(deque, 'items');
        });
        it('the items property is an empty array', () => {
            const deque = d.deque<number>();
            assert.isEmpty(deque.items);
        });
    });
    describe('addFirst', () => {
        it('returns an object with an items property', () => {
            const add = d.addFirst(d.deque<number>(), 5);
            assert.property(add, 'items');
        });
        it('adds the given item to position 0 in the items array', () => {
            const deque = d.addFirst(d.addFirst(d.deque<number>(), 5), 10);
            assert.strictEqual(deque.items[0], 10);
        });
    });
    describe('addLast', () => {
        it('returns an object with an items property', () => {
            const deque = d.addLast(d.deque<number>(), 1);
            assert.property(deque, 'items');
        });
        it('adds the given item to the end of the items array', () => {
            const deque = d.addLast(d.addLast(d.deque<number>(), 5), 10);
            assert.strictEqual(deque.items[1], 10);
        })
    })
});