export interface IState<T> {
  status: 'init' | 'loading' | 'success' | 'error';
  data: T;
  error?: string;
}
