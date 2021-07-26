import { IRecipient } from '../../core/interfaces/recipient';
import { baseFetch } from '../../core/services/fetch';

export const getRecipients = async () => {
  const { data } = await baseFetch<IRecipient[]>({
    url: '/recipient',
    headers: {
      authorization: true,
    },
  });
  return data;
};

export const createRecipients = async (payload: IRecipient) => {
  await baseFetch({
    url: `/recipient`,
    headers: {
      authorization: true,
    },
    method: 'POST',
    data: payload,
  });
};

export const updateRecipients = async (payload: IRecipient) => {
  await baseFetch({
    url: `/recipient`,
    headers: {
      authorization: true,
    },
    method: 'PUT',
    data: payload,
  });
};

export const deleteRecipients = async (id: string | string[]) => {
  await baseFetch({
    url: `/recipient`,
    headers: {
      authorization: true,
    },
    method: 'DELETE',
    data: id,
  });
};
