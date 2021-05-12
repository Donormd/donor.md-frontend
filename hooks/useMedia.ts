import { useEffect, useState } from 'react';

export const useMedia = (width: number): boolean => {
  const [isBreakpoint, setBreakpoint] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (width > document.body.offsetWidth) {
        setBreakpoint(true);
      }
      setBreakpoint(false);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setBreakpoint(false);
      });
    };
  }, [width]);

  return isBreakpoint;
};
