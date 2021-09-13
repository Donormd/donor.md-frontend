import { IPlanning } from '../core/interfaces/planning';
import { baseFetch } from '../core/services/fetch';

export const getPlanning = async () => {
  const { data } = await baseFetch<IPlanning[]>({
    url: `/donation/planing`,
    headers: {
      authorization: true,
    },
  });

  return data;
};

export const createPlanning = async (payload: IPlanning) => {
  await baseFetch({
    url: `/donation/planing`,
    method: 'POST',
    headers: {
      authorization: true,
    },
    data: payload,
  });
};
