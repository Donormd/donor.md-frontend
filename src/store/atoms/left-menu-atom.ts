import { atom } from 'recoil';

export const leftMenuAtom = atom<number>({
  key: 'leftMenuAtom',
  default: 0,
});
