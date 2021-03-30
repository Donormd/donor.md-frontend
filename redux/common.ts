import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IState } from '../interfaces/initial-state';
import { apiV1 } from './constants/url';

export interface IOptions {
  _id: string;
  text: string | number;
}

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

const commonMap: Record<Options, string> = {
  cities: `${apiV1}/city`,
  bloodGroups: `${apiV1}/blood-group`,
  bloodCenter: `${apiV1}/blood-center`,
  organizations: `${apiV1}/organization`,
  transfusionCenter: `${apiV1}/transfusion-сenter`,
  typesAssistance: `${apiV1}/types-assistance`,
  userGroup: `${apiV1}/user-group`,
  userStatus: `${apiV1}/user-status`,
  sex: `${apiV1}/sex`,
};

export const getOptions = createAsyncThunk<IOptions[], Options>(
  'common/options/get',
  async (dataType) => {
    const response = await axios.get(commonMap[dataType]);
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
