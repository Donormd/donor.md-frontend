import { IDonorStory } from '../../core/interfaces/story';
import { baseFetch } from '../../core/services/fetch';

export const getStories = async () => {
  const { data } = await baseFetch<IDonorStory[]>({
    url: `/story/`,
    headers: {
      authorization: true,
    },
  });
  return data;
};

export const createOrUpdateUserStory = async (payload: string) => {
  await baseFetch({
    method: 'POST',
    url: `/story`,
    data: payload,
    headers: {
      authorization: true,
    },
  });
};
