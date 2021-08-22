import { topDonorsUrl } from '../core/constants/url';
import { IStory } from '../core/interfaces/story';
import { baseFetch } from '../core/services/fetch';

export const getTopDonors = async (sexId?: string) => {
  const { data } = await baseFetch<IStory[]>({
    url: topDonorsUrl(sexId),
  });

  return data;
};
