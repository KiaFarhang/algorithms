import { IHasItems } from '../../../Interfaces/IHasItems';
import { hasItems } from '../hasItems';

export const bag = <T>(): IHasItems<T> => {
    return Object.assign({}, hasItems<T>());
}

export const add = <T>(bag: IHasItems<T>, item: T): IHasItems<T> => {
    let items = Array.from(bag.items);
    items.push(item);
    let newBag: IHasItems<T> = { items: items };
    return newBag;
}

export const isEmpty = <T>(bag: IHasItems<T>): boolean => bag.items.length === 0;

export const size = <T>(bag: IHasItems<T>): number => bag.items.length;

