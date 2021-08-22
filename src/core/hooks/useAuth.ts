import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

import { getUser } from '../../queries/user';
import { useTypedQuery } from '../../queries/utils';

export const useAuth = ({ redirectTo = '/' } = {}) => {
  const { data: user } = useTypedQuery('user', getUser);

  const { push } = useRouter();

  useEffect(() => {
    user && push('/auth');
  }, [user, redirectTo, push]);

  return { user };
};
