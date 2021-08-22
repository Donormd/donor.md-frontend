import { IReview } from '../core/interfaces/review';
import { baseFetch } from '../core/services/fetch';

export const getReview = async () => {
  const { data } = await baseFetch<IReview[]>({
    url: `/review`,
    headers: {
      authorization: true,
    },
  });
  return data;
};

export const createReview = async (payload: IReview) => {
  const { data } = await baseFetch<IReview>({
    url: `/review`,
    method: 'POST',
    data: payload,
    headers: {
      authorization: true,
    },
  });
  return data;
};
