import { IOptions } from '../core/interfaces/IIterableStruct';
import { baseFetch } from '../core/services/fetch';

const urlMap = {
  cities: 'cities',
  bloodGroups: 'blood-groups',
  bloodCenter: 'blood-center',
  organizations: 'organizations',
  transfusionCenter: 'transfusion-center',
  typesAssistance: 'types-assistance',
  userGroup: 'user-group',
  userStatus: 'user-status',
  sex: 'sex',
};

export const getOptions = async (group: keyof typeof urlMap) => {
  const { data } = await baseFetch<IOptions[]>({
    url: `/${urlMap[group]}`,
  });
  return data;
};
