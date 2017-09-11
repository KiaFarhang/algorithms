import 'mocha';
import * as chai from 'chai';
const assert = chai.assert;

import { IHasItems } from '../../../Interfaces/IHasItems';
import * as s from './index';

describe('Stack', () => {
    describe('stack', () => {
        it('returns an object with an items property', () => {
            const stack = s.stack<number>();
            assert.isObject(stack);
            assert.property(stack, 'items');
        });
        it('the items property is an empty array', () => {
            const stack = s.stack<number>();
            assert.isArray(stack.items);
            assert.isEmpty(stack.items);
        });
    });
    describe('push', () => {
        it('returns a stack', () => {
            const stack = s.push(s.stack<number>(), 0);
            assert.isObject(stack);
            assert.property(stack, 'items');
            assert.isArray(stack.items);
        });
        it(`adds the item passed to it to the first index of the stack's items array`, () => {
            const stack = s.push(s.push(s.stack<number>(), 0), 1);
            assert.strictEqual(stack.items[0], 1);
            assert.strictEqual(stack.items[1], 0);
        });
    });
    describe('pop', () => {
        it('returns an object', () => {
            const stack = s.push(s.stack<number>(), 0);
            const pop = s.pop(stack);
            assert.isObject(pop);
        });
        it('has a new property', () => {
            const stack = s.push(s.stack<number>(), 0);
            const pop = s.pop(stack);
            assert.property(pop, 'new');
        });
        it('the new property is a stack', () => {
            const stack = s.push(s.stack<number>(), 0);
            const poppedStack = s.pop(stack).new;
            assert.isObject(poppedStack);
            assert.property(poppedStack, 'items');
            assert.isArray(poppedStack.items);
        });
        it('the new stack no longer contains the first item from the old stack', () => {
            const original = s.push(s.push(s.stack<number>(), 0), 1);
            const newStack = s.pop(original).new;
            assert.lengthOf(newStack.items, 1);
            assert.strictEqual(newStack.items[0], 0);
        });
        it('has a removed property', () => {
            const stack = s.push(s.stack<number>(), 0);
            const pop = s.pop(stack);
            assert.property(pop, 'removed');
        });
        it('the removed property equals whatever the first item in the old stack was', () => {
            const original = s.push(s.push(s.stack<number>(), 0), 1);
            const removed = s.pop(original).removed;
            assert.strictEqual(removed, 1);
        });
    });
    describe('isEmpty', () => {
        it(`returns true if the stack's items property is empty`, () => {
            assert.isTrue(s.isEmpty(s.stack<number>()));
        });
        it(`returns false if the stack's items are not empty`, () => {
            assert.isFalse(s.isEmpty(s.push(s.stack<number>(), 0)));
        });
    });
    describe('size', () => {
        it('returns a number', () => {
            assert.isNumber(s.size(s.stack<number>()));
        });
        it(`the number is equal to the size of the stack's items array`, () => {
            const stack = s.push(s.stack<number>(), 5);
            assert.strictEqual(s.size(stack), 1);
        });
    });
});