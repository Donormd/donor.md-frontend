import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IOptions } from '../interfaces/IIterableStruct';
import { IState } from '../interfaces/redux';
import { fetch } from '../services/fetch';
import { storage } from '../services/storage';
import { apiV1 } from './constants/url';

const insideState: IState<IOptions[] | null> = {
  status: 'init',
  data: null,
  error: null,
};

const initialState: Record<string, IState<IOptions[] | null>> = {
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
    const response = await fetch<IOptions[]>({
      url: `${apiV1}/${urlMap[group]}`,
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
