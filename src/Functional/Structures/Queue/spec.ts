import 'mocha';
import * as chai from 'chai';
const assert = chai.assert;

import { IHasItems } from '../../../Interfaces/IHasItems';
import * as q from './index';

describe('Queue', () => {
    describe('queue', () => {
        it('returns an object with an items property', () => {
            const queue = q.queue<number>();
            assert.property(queue, 'items');
        });
        it('the items property is an empty array', () => {
            const queue = q.queue<number>();
            assert.isEmpty(queue.items);
        });
    });
    describe('enqueue', () => {
        it('returns an object with the new item in its items property', () => {
            const queue = q.enqueue(q.queue<number>(), 5);
            assert.strictEqual(queue.items[0], 5);
        });
        it('the new item is added to the back of the queue', () => {
            const queue = q.enqueue(q.enqueue(q.queue<number>(), 0), 1);
            assert.strictEqual(queue.items[0], 0);
            assert.strictEqual(queue.items[1], 1);
        });
    });
    describe('dequeue', () => {
        it('returns an object', () => {
            const result = q.dequeue(q.enqueue(q.queue<number>(), 0));
            assert.isObject(result);
        });
        it('has a new property', () => {
            const result = q.dequeue(q.enqueue(q.queue<number>(), 0));
            assert.property(result, 'new');
        });
        it('the new property is a queue', () => {
            const result = q.dequeue(q.enqueue(q.queue<number>(), 0));
            assert.property(result.new, 'items');
        });
        it('the new queue no longer contains the first item in line', () => {
            const queue = q.enqueue(q.enqueue(q.queue<number>(), 0), 1);
            const result = q.dequeue(queue).new;
            assert.lengthOf(result.items, 1);
            assert.strictEqual(result.items[0], 1);
        });
        it('has a removed property', () => {
            const result = q.dequeue(q.enqueue(q.queue<number>(), 0));
            assert.property(result, 'removed');
        });
        it('the removed property is equal to whatever the first item in the old queue was', () => {
            const queue = q.enqueue(q.enqueue(q.queue<number>(), 0), 1);
            const result = q.dequeue(queue).removed;
            assert.strictEqual(result, 0);
        });
    });
    describe('isEmpty', () => {
        it('returns true if the queue has no items', () => {
            assert.isTrue(q.isEmpty(q.queue<number>()));
        });
        it('returns false if the queue contains items', () => {
            assert.isFalse(q.isEmpty(q.enqueue(q.queue<number>(), 0)));
        });
    });
    describe('size', () => {
        it('returns a number equal to the length of the queue', () => {
            const queue = q.enqueue(q.queue(), 0);
            assert.strictEqual(q.size(queue), 1);
        });
    });
});