import { createSlice } from '@reduxjs/toolkit';

export interface IBlood {
  key: string | number;
  quantity: number;
  group: string;
}

const bloodGroups: IBlood[] = [
  { key: 1, quantity: 1, group: '0 (I) - Rh+' },
  { key: 2, quantity: 2, group: '0 (I) - Rh-' },
  { key: 3, quantity: 3, group: 'A (II) - Rh+' },
  { key: 4, quantity: 3, group: 'A (II) - Rh-' },
  { key: 5, quantity: 2, group: 'B (III) - Rh+' },
  { key: 6, quantity: 1, group: 'B (III) - Rh-' },
  { key: 7, quantity: 2, group: 'B (IV) - Rh+' },
  { key: 8, quantity: 3, group: 'B (IV) - Rh-' },
];

const initialState = {
  status: 'init',
  data: bloodGroups,
  error: '',
};

const monitoring = createSlice({
  name: 'monitoring',
  initialState,
  reducers: {},
});

export const { reducer, actions, caseReducers } = monitoring;
