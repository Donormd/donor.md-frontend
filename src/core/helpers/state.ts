import { IState } from '../interfaces/redux';

export const isLoading = <T>(obj: IState<T[]>) => obj.status === 'loading' || !obj.data.length;
