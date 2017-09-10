import { IHasItems } from '../../Interfaces/IHasItems';

export const hasItems = <T>(): IHasItems<T> => {
    let object: { items: T[] } = { items: [] };
    return object;
}