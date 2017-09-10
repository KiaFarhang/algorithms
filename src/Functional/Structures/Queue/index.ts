import { IHasItems } from '../../../Interfaces/IHasItems';
import { IRemovalObject } from '../../../Interfaces/IRemovalObject';
import { hasItems } from '../hasItems';

export const queue = <T>(): IHasItems<T> => {
    return Object.assign({}, hasItems<T>());
}

export const enqueue = <T>(queue: IHasItems<T>, item: T): IHasItems<T> => {
    let items = Array.from(queue.items);
    items.push(item);
    let newQueue: IHasItems<T> = { items: items };
    return newQueue;
}

export const dequeue = <T>(queue: IHasItems<T>): IRemovalObject<T> => {
    let items = Array.from(queue.items);
    let removed = items.shift();
    let returned: IRemovalObject<T> = {
        new: { items: items },
        removed: removed
    };

    return returned;
}

export const isEmpty = <T>(queue: IHasItems<T>): boolean => queue.items.length === 0;

export const size = <T>(queue: IHasItems<T>): number => queue.items.length;