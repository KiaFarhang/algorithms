import 'mocha';
import * as chai from 'chai';
const assert = chai.assert;

import { Bag } from '../../../Interfaces/Bag';
import * as b from './index';

describe('Bag', () => {
    describe('bag', () => {
        it('returns an object with an items property', () => {
            const bag = b.bag<number>();
            assert.property(bag, 'items');
        });
    });
    describe('add', () => {
        it('returns a bag with one more item than the bag passed in', () => {
            const bag: Bag<number> = {
                items: [0, 1, 2]
            };

            const addedBag = b.add(bag, 3);
            assert.strictEqual(addedBag.items.length, 4);
        });
    });
    describe('isEmpty', () => {
        it('returns true if the bag has no items', () => {
            const bag = b.bag<string>();
            assert.isTrue(b.isEmpty(bag));
        });
        it('returns false if the bag has items', () => {
            const bag = b.add(b.bag<string>(), 'foo');
            assert.isFalse(b.isEmpty(bag));
        });
    });
    describe('size', () => {
        it('returns the number of items in the bag', () => {
            const bag = b.add(b.bag<string>(), 'foo');
            assert.strictEqual(b.size(bag), 1);
        });
    });
});