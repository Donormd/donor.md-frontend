import { ICorporateDonation } from '../core/interfaces/donation';
import { baseFetch } from '../core/services/fetch';

export const getCorporateDonations = async () => {
  const { data } = await baseFetch<ICorporateDonation[]>({
    url: '/corporate-donation',
    headers: {
      authorization: true,
    },
  });
  return data;
};

export const createCorporateDonations = async (payload: ICorporateDonation) => {
  const { data } = await baseFetch({
    url: `/corporate-donation`,
    data: payload,
    method: 'POST',
  });
  return data;
};

export const updateCorporateDonations = async (payload: ICorporateDonation) => {
  await baseFetch({
    url: `/corporate-donation`,
    headers: {
      authorization: true,
    },
    method: 'PUT',
    data: payload,
  });
};

export const deleteCorporateDonations = async (id: string | string[]) => {
  await baseFetch({
    url: `/corporate-donation`,
    headers: {
      authorization: true,
    },
    method: 'DELETE',
    data: id,
  });
};
