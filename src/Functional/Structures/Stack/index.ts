import { IHasItems } from '../../../Interfaces/IHasItems';
import { IRemovalObject } from '../../../Interfaces/IRemovalObject';
import { hasItems } from '../hasItems';

export const stack = <T>(): IHasItems<T> => {
    return Object.assign({}, hasItems<T>());
}

export const push = <T>(stack: IHasItems<T>, item: T): IHasItems<T> => {
    let items = Array.from(stack.items);
    items.unshift(item);
    return { items: items };
}

export const pop = <T>(stack: IHasItems<T>): IRemovalObject<T> => {
    let items = Array.from(stack.items);
    let removed = items.shift();
    return {
        new: { items: items },
        removed: removed
    }
}

export const isEmpty = <T>(stack: IHasItems<T>): boolean => stack.items.length === 0;

export const size = <T>(stack: IHasItems<T>): number => stack.items.length;