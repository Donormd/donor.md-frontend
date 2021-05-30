import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiV1 } from '../constants/url';
import { IState } from '../../interfaces/initial-state';
import { fetch } from '../../services/fetch';

export interface IMonitoring {
  _id: string;
  fullname: string;
  dateUpdate?: Date;
  values: Record<string, number>;
}

interface IInitialState {
  values: IState<IMonitoring | null>;
  action: IState<null>;
}

const initialState: IInitialState = {
  values: {
    status: 'init',
    data: null,
    error: null,
  },
  action: {
    status: 'init',
    data: null,
    error: null,
  },
};

export const getData = createAsyncThunk<IMonitoring[]>('monitoring/get', async () => {
  const response = await fetch<IMonitoring[]>({ url: `${apiV1}/monitoring` });
  return response.data;
});

export const sendData = createAsyncThunk<void, IMonitoring>('monitoring/post', async (payload) => {
  await fetch({
    url: `${apiV1}/monitoring`,
    method: 'POST',
    data: payload,
  });
});

const monitoring = createSlice({
  name: 'monitoring',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.values.status = 'success';
      state.values.data = action.payload[0];
    });
    builder.addCase(getData.pending, (state) => {
      state.values.status = 'loading';
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.values.status = 'error';
      state.values.error = action.error.message || 'Ops something went wrong';
    });
    builder.addCase(sendData.fulfilled, (state) => {
      state.action.status = 'success';
    });
    builder.addCase(sendData.pending, (state) => {
      state.action.status = 'loading';
    });
    builder.addCase(sendData.rejected, (state, action) => {
      state.action.status = 'error';
      state.action.error = action.error.message || 'Ops something went wrong';
    });
  },
});

export const { reducer, actions, caseReducers } = monitoring;
