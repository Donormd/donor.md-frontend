import { atom } from 'recoil';

import { IUser, IUserWithToken } from '../../core/interfaces/user';

export const userAtom = atom<IUser | IUserWithToken>({
  key: 'userAtom',
  default: {
    id: '',
    cityId: '',
    corporateId: '',
    avatar: '',
    phoneMobile: '',
    creationDate: '',
    groupId: '',
    statusId: '',
    bloodGroupId: '',
    sexId: '',
    fullname: '',
    email: '',
    phone: '',
    dateBirth: '',
    honorary: false,
  },
});
