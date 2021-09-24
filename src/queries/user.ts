import { IUser, IUserWithToken } from '../core/interfaces/user';
import { baseFetch } from '../core/services/fetch';
import { storage } from '../core/services/storage';

export type signInType = { email: string; password: string };

export const signIn = async (payload: { email: string; password: string }) => {
  const { data } = await baseFetch<IUserWithToken>({
    method: 'POST',
    url: `/auth/sign-in`,
    data: payload,
  });

  storage.set<string>('token', data.token);

  return data;
};

export const getUser = async () => {
  const { data } = await baseFetch<IUser>({
    url: `/user`,
    headers: {
      authorization: true,
    },
  });
  return data;
};

export const createUser = async (payload: IUser) => {
  const { data } = await baseFetch<IUserWithToken>({
    method: 'POST',
    url: `/auth/sign-up`,
    data: payload,
  });

  storage.set<string>('token', data.token);

  return data;
};

export const recoveryUser = async (payload: { email: string }) => {
  const { data } = await baseFetch<void>({
    method: 'POST',
    url: `/auth/recovery`,
    data: payload,
  });

  return data;
};

export const updateUser = async (payload: IUser) => {
  const { data } = await baseFetch({
    url: `/user`,
    method: 'PUT',
    data: payload,
    headers: {
      authorization: true,
    },
  });

  return data;
};
