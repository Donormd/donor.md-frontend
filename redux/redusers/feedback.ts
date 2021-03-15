import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiV1 } from '../constants/url';

const initialState = {
  status: '',
  error: '',
};

export interface IFeedback {
  contact: string;
  message: string;
}

export const sendFeedback = createAsyncThunk<string, IFeedback>(
  'feedback/post',
  async (payload) => {
    const response = await axios.post(`${apiV1}/feedback`, {
      data: [payload],
    });
    return response.data;
  },
);

const feedback = createSlice({
  name: 'feedback',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendFeedback.fulfilled, (state) => {
      state.status = 'success';
    });
    builder.addCase(sendFeedback.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(sendFeedback.rejected, (state, payload) => {
      state.status = 'error';
      state.error = String(payload.error.message);
    });
  },
});

export const { reducer, caseReducers, actions } = feedback;
