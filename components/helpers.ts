import { IState } from '../interfaces/initial-state';

export const isLoading = (obj: IState<any | null>) => {
  return !(obj.status !== 'loading' && Array.isArray(obj.data));
};
