import { atom } from 'recoil';

import { IUser } from '../../core/interfaces/user';

export const userAtom = atom<IUser>({
  key: 'userAtom',
  default: {} as IUser,
});
