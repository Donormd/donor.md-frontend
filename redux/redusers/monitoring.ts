import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiV1 } from '../constants/url';

export interface IBlood {
  _id: string;
  quantity: number;
  group: string;
  dateUpdate: Date;
}

interface IInitialState {
  status: string;
  data: IBlood[];
  error: string;
}

const initialState: IInitialState = {
  status: 'loading',
  data: [],
  error: '',
};

export const sendData = createAsyncThunk<null, IBlood[]>('monitoring/post', async (payload) => {
  const response = await axios.post(`${apiV1}/monitoring`, {
    data: [payload],
  });
  return response.data;
});

export const getData = createAsyncThunk<IBlood[]>('monitoring/get', async () => {
  const response = await axios.get(`${apiV1}/monitoring`);
  return response.data;
});

const monitoring = createSlice({
  name: 'monitoring',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendData.fulfilled, (state) => {
      state.status = 'success';
    });
    builder.addCase(sendData.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(sendData.rejected, (state, action) => {
      state.status = 'error';
      state.error = String(action.error.message);
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.status = 'success';
      state.data = action.payload;
    });
    builder.addCase(getData.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.status = 'error';
      state.error = String(action.error.message);
    });
  },
});

export const { reducer, actions, caseReducers } = monitoring;
