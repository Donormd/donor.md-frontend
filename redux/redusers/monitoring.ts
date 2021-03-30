import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiV1 } from '../constants/url';
import { IState } from '../../interfaces/initial-state';

export interface IBlood {
  _id: string;
  quantity: number;
  group: string;
  dateUpdate: Date;
}

interface IInitialState {
  values: IState<IBlood[] | null>;
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

export const getData = createAsyncThunk<IBlood[]>('monitoring/get', async () => {
  const response = await axios.get(`${apiV1}/monitoring`);
  return response.data;
});

export const sendData = createAsyncThunk<void, IBlood[]>('monitoring/post', async (payload) => {
  await axios.post(`${apiV1}/monitoring`, {
    data: [payload],
  });
});

const monitoring = createSlice({
  name: 'monitoring',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.values.status = 'success';
      state.values.data = action.payload;
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
