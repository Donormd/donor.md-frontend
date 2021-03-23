/* eslint no-console:0 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IState } from '../interfaces/initial-state';

export interface IOptions {
  value: string | number;
  text: string | number;
}

interface IData {
  cities: IOptions[] | null;
  bloodGroups: IOptions[] | null;
  bloodCenter: IOptions[] | null;
  organizations: IOptions[] | null;
  transfusionCenter: IOptions[] | null;
  typesAssistance: IOptions[] | null;
}

const initialState: IState<IData> = {
  status: 'init',
  data: {
    cities: null,
    bloodGroups: null,
    bloodCenter: null,
    organizations: null,
    transfusionCenter: null,
    typesAssistance: null,
  },
  error: null,
};

const commonMap = {
  cities: '',
  bloodGroups: '',
  bloodCenter: '',
  organizations: '',
  transfusionCenter: '',
  typesAssistance: '',
};

const getData = createAsyncThunk<IOptions[], keyof IData>('common/get', async (dataType) => {
  const response = await axios.get(commonMap[dataType]);
  return response.data;
});

const common = createSlice({
  name: 'common',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      console.log({ action });
      state.status = 'success';
      state.data = {
        ...state.data,
        cities: action.payload,
      };
    });
  },
});

export const { reducer, caseReducers, actions } = common;
