import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './useAuth';

export const useRequiredAuth = (resolve: string | null, reject: string) => {
  const auth = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!auth?.user) {
      router && router.push(reject);
    } else {
      router && router.push(resolve || router.pathname);
    }
  }, [auth?.user]);
};
