import { IBonus } from '@Interfaces/bonus';
import { baseFetch } from '@Services/fetch';

export const getBonuses = async () => {
  const { data } = await baseFetch<IBonus[]>({
    url: '/bonus',
    headers: {
      authorization: true,
    },
  });
  return data;
};

export const createBonuses = async (payload: IBonus) => {
  await baseFetch({
    url: `/bonus`,
    headers: {
      authorization: true,
    },
    method: 'POST',
    data: payload,
  });
};

export const updateBonuses = async (payload: IBonus) => {
  await baseFetch({
    url: `/bonus`,
    headers: {
      authorization: true,
    },
    method: 'PUT',
    data: payload,
  });
};

export const deleteBonuses = async (id: string | string[]) => {
  await baseFetch({
    url: `/bonus`,
    headers: {
      authorization: true,
    },
    method: 'DELETE',
    data: id,
  });
};
