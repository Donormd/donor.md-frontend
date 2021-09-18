import { getUserUrl } from '../constants/url';
import { IUser } from '../interfaces/user';
import { baseFetch } from './fetch';

export const serverSession = async (ctx) => {
  const token = ctx.req?.token;

  if (!token) {
    return {
      authorization: false,
    };
  }

  const user = await baseFetch<IUser>({
    url: getUserUrl,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  ctx.req = {
    ...ctx.req,
    user,
  };

  return { user };
};
