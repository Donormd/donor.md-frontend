import { ICorporateDonation } from '../core/interfaces/donation';
import { baseFetch } from '../core/services/fetch';

export const createCorporateDonations = async (payload: ICorporateDonation) => {
  const { data } = await baseFetch({
    url: `/corporate-donation`,
    data: payload,
    method: 'POST',
  });
  return data;
};
