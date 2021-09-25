import { IBecomeVolunteer } from '../core/interfaces/become-volunteer';
import { baseFetch } from '../core/services/fetch';

export const getVolunteer = async () => {
  const { data } = await baseFetch<IBecomeVolunteer[]>({
    url: '/volunteer',
    headers: {
      authorization: true,
    },
  });
  return data;
};

export const createVolunteer = async (payload: IBecomeVolunteer) => {
  await baseFetch({
    url: `/volunteer`,
    method: 'POST',
    data: payload,
  });
};

export const updateVolunteer = async (payload: IBecomeVolunteer) => {
  await baseFetch({
    url: `/volunteer`,
    headers: {
      authorization: true,
    },
    method: 'PUT',
    data: payload,
  });
};

export const deleteVolunteer = async (id: string | string[]) => {
  await baseFetch({
    url: `/volunteer`,
    headers: {
      authorization: true,
    },
    method: 'DELETE',
    data: id,
  });
};
