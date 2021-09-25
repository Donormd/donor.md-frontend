import { useEffect, useRef } from 'react';

interface FromTo {
  from: unknown;
  to: unknown;
}

type Changes = Record<string, FromTo>;

type GenericProps = Record<string, unknown>;

export function useWhyDidYouUpdate(name: string, props: GenericProps): void {
  const previousProps = useRef<GenericProps>(props);

  useEffect(() => {
    if (previousProps && previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      const changes: Changes = {};
      allKeys.forEach((key) => {
        if (previousProps.current[key] !== props[key]) {
          changes[key] = {
            from: previousProps.current[key],
            to: props[key],
          };
        }
      });

      if (Object.keys(changes).length) {
        // eslint-disable-next-line no-console
        console.log('[why-did-you-update]', name, changes);
      }
    }

    previousProps.current = props;
  });
}
