import { IHasItems } from '../../../Interfaces/IHasItems';
import { IRemovalObject } from '../../../Interfaces/IRemovalObject';
import { hasItems } from '../hasItems';

export const deque = <T>(): IHasItems<T> => {
    return Object.assign({}, hasItems<T>());
}

export const addFirst = <T>(deque: IHasItems<T>, item: T): IHasItems<T> => {
    let items = Array.from(deque.items);
    items.unshift(item);
    let newDeque: IHasItems<T> = { items: items };
    return newDeque;
}

export const addLast = <T>(deque: IHasItems<T>, item: T): IHasItems<T> => {
    let items = Array.from(deque.items);
    items.push(item);
    let newDeque: IHasItems<T> = { items: items };
    return newDeque;
}
