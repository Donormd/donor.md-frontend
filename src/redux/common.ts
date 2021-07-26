import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IOptions } from '../core/interfaces/IIterableStruct';
import { IState } from '../core/interfaces/redux';
import { baseFetch } from '../core/services/fetch';
import { storage } from '../core/services/storage';

const insideState: IState<IOptions[]> = {
  status: 'init',
  data: [],
  error: null,
};

const initialState: Record<string, IState<IOptions[]>> = {
  cities: insideState,
  bloodGroups: insideState,
  bloodCenter: insideState,
  organizations: insideState,
  transfusionCenter: insideState,
  typesAssistance: insideState,
  userGroup: insideState,
  userStatus: insideState,
  sex: insideState,
};

type Options =
  | 'cities'
  | 'bloodGroups'
  | 'bloodCenter'
  | 'organizations'
  | 'transfusionCenter'
  | 'typesAssistance'
  | 'userGroup'
  | 'userStatus'
  | 'sex';

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

export const getOptions = createAsyncThunk<IOptions[], Options>(
  'common/options/get',
  async (group) => {
    const response = await baseFetch<IOptions[]>({
      url: `/${urlMap[group]}`,
    });
    return response.data;
  },
);

const common = createSlice({
  name: 'common',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOptions.fulfilled, (state, action) => {
      const { arg } = action.meta;
      state[arg].status = 'success';
      state[arg].data = action.payload;
      state[arg].error = null;
      storage.set(arg, action.payload);
    });
    builder.addCase(getOptions.pending, (state, action) => {
      const { arg } = action.meta;
      state[arg].status = 'loading';
    });
    builder.addCase(getOptions.rejected, (state, action) => {
      const { arg } = action.meta;
      state[arg].status = 'error';
      state[arg].error = action.error.message || 'Ops something went wrong';
    });
  },
});

export const { reducer, caseReducers, actions } = common;
