import { IHasItems } from './IHasItems';

export interface IRemovalObject<T> {
    new: IHasItems<T>,
    removed: T
}