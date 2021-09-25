import { IOptions } from '../core/interfaces/IIterableStruct';
import { baseFetch } from '../core/services/fetch';

const groupType = [
  'cities',
  'blood-groups',
  'blood-center',
  'organizations',
  'transfusion-center',
  'types-assistance',
  'user-group',
  'user-status',
  'sex',
] as const;

export const getOptions = async (group: typeof groupType[number]) => {
  const { data } = await baseFetch<IOptions[]>({
    url: `/${group}`,
  });
  return data;
};
