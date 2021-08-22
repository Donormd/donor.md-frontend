import { IChangePassword, ISettings } from '../core/interfaces/settings';
import { baseFetch } from '../core/services/fetch';

export const getSettings = async () => {
  const { data } = await baseFetch<ISettings | null>({
    url: `/settings`,
    headers: {
      authorization: true,
    },
  });
  return data;
};

export const updateSettings = async (payload: ISettings) => {
  const { data } = await baseFetch<ISettings>({
    method: 'put',
    url: `/settings`,
    headers: {
      authorization: true,
    },
    data: payload,
  });
  return data;
};

export const updatePassword = async (payload: IChangePassword) => {
  const { data } = await baseFetch<string>({
    method: 'post',
    url: `/settings/`,
    headers: {
      authorization: true,
    },
    data: payload,
  });
  return data;
};
