import { useEffect, useMemo, useRef } from 'react';

export interface CallOptions {
  leading?: boolean;
  trailing?: boolean;
}

export interface Options extends CallOptions {
  maxWait: number;
}

export interface ControlFunctions {
  cancel: () => void;
  flush: () => void;
  isPending: () => boolean;
}

export interface DebouncedState<T extends (...args: any[]) => ReturnType<T>> extends ControlFunctions {
  (...args: Parameters<T>): ReturnType<T> | undefined;
}

export const useDebouncedCallback = <T extends (...args: any[]) => ReturnType<T>>(
  func: T,
  wait = 0,
  options: Options = { maxWait: 0 },
): DebouncedState<T> => {
  const lastCallTime = useRef(0);
  const lastInvokeTime = useRef(0);
  const timerId = useRef<NodeJS.Timeout | number | null>(null);
  const lastArgs = useRef<unknown[] | null>([]);
  const lastThis = useRef<unknown>();
  const result = useRef<ReturnType<T>>();
  const funcRef = useRef(func);
  const mounted = useRef(true);

  funcRef.current = func;

  const useRAF = !wait && wait !== 0 && typeof window !== 'undefined';

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  const leading = !!options.leading;
  const trailing = 'trailing' in options ? !!options.trailing : true; // `true` by default
  const maxWait = Math.max(options.maxWait, wait);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return useMemo(() => {
    const invokeFunc = (time: number) => {
      const args = lastArgs.current;
      const thisArg = lastThis.current;

      lastArgs.current = null;
      lastThis.current = null;
      lastInvokeTime.current = time;
      // eslint-disable-next-line no-return-assign
      return (result.current = funcRef.current.apply(thisArg, args as unknown[]));
    };

    const startTimer = (pendingFunc: () => void, wait: number) => {
      if (useRAF && timerId.current !== null) {
        cancelAnimationFrame(+timerId.current);
      }
      timerId.current = useRAF ? requestAnimationFrame(pendingFunc) : setTimeout(pendingFunc, wait);
    };

    const shouldInvoke = (time: number) => {
      if (!mounted.current) return false;

      const timeSinceLastCall = time - lastCallTime.current;
      const timeSinceLastInvoke = time - lastInvokeTime.current;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (
        !lastCallTime.current ||
        timeSinceLastCall >= wait ||
        timeSinceLastCall < 0 ||
        timeSinceLastInvoke >= maxWait
      );
    };

    const trailingEdge = (time: number) => {
      timerId.current = null;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs.current) {
        return invokeFunc(time);
      }
      lastArgs.current = null;
      lastThis.current = null;
      return result.current;
    };

    const timerExpired = () => {
      const time = Date.now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      if (!mounted.current) {
        return;
      }
      const timeSinceLastCall = time - lastCallTime.current;
      const timeSinceLastInvoke = time - lastInvokeTime.current;
      const timeWaiting = wait - timeSinceLastCall;
      const remainingWait = Math.min(timeWaiting, maxWait - timeSinceLastInvoke);

      startTimer(timerExpired, remainingWait);
    };

    const func: DebouncedState<T> = (...args: Parameters<T>) => {
      const time = Date.now();
      const isInvoking = shouldInvoke(time);

      lastArgs.current = args;
      lastThis.current = this;
      lastCallTime.current = time;

      if (isInvoking) {
        if (!timerId.current && mounted.current) {
          lastInvokeTime.current = lastCallTime.current;
          startTimer(timerExpired, wait);
          return leading ? invokeFunc(lastCallTime.current) : result.current;
        }

        startTimer(timerExpired, wait ?? 0);
        return invokeFunc(lastCallTime.current);
      }
      if (!timerId.current) {
        startTimer(timerExpired, wait);
      }
      return result.current;
    };

    func.cancel = () => {
      if (timerId.current) {
        useRAF ? cancelAnimationFrame(+timerId.current) : clearTimeout(+timerId.current);
      }
      lastInvokeTime.current = 0;
      lastArgs.current = null;
      timerId.current = null;
      lastCallTime.current = 0;
      lastThis.current = null;
    };

    func.isPending = () => {
      return !!timerId.current;
    };

    func.flush = () => {
      return !timerId.current ? result.current : trailingEdge(Date.now());
    };

    return func;
  }, [leading, wait, maxWait, trailing, useRAF]);
};
