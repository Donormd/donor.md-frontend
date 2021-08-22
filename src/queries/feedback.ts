import { baseFetch } from '../core/services/fetch';

export interface IFeedback {
  contact: string;
  message: string;
}

export const getFeedback = async () => {
  const { data } = await baseFetch<IFeedback[]>({
    url: `/feedback`,
  });
  return data;
};

export const createFeedback = async (payload: IFeedback) => {
  const { data } = await baseFetch<string>({
    url: `/feedback`,
    data: payload,
    method: 'POST',
  });

  return data;
};
