import { IDonation } from '../core/interfaces/donation';
import { baseFetch } from '../core/services/fetch';

export const getDonation = async () => {
  const { data } = await baseFetch<IDonation[]>({
    url: `/donations`,
    headers: {
      authorization: true,
    },
  });
  return data;
};

export const addDonation = async (payload: IDonation) => {
  const { data } = await baseFetch<IDonation>({
    url: `/donations`,
    headers: {
      authorization: true,
    },
    method: 'POST',
    data: payload,
  });
  return data;
};
