import { baseFetch } from '../../core/services/fetch';

export const getDonation = async () => {
  const { data } = await baseFetch({
    url: `/donations`,
    headers: {
      authorization: true,
    },
  });

  return data;
};
