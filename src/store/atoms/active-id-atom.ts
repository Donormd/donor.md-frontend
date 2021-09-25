import { atomFamily } from 'recoil';

export const activeIdAtom = atomFamily<string, string>({
  key: 'activeIdAtom',
  default: '',
});
