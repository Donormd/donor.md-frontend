export interface IState<T> {
  status: 'init' | 'loading' | 'success' | 'error';
  data: T;
  error: Record<string, unknown>[] | Record<string, unknown> | string | null;
}
