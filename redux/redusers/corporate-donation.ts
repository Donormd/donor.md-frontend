import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiV1 } from '../constants/url';

const initialState = {
  status: '',
  error: '',
};

export interface ICorporateDonation {
  organization: string;
  leader: string;
  contact: string;
  position: string;
  email: string;
  telephoneNumber: string;
  cityPhoneNumber: string;
  amountWorkers: number;
}

export const sendData = createAsyncThunk<null, ICorporateDonation>(
  'corporate-donation/post',
  async (payload) => {
    const response = await axios.post(`${apiV1}/corporate-donation`, {
      data: [payload],
    });
    return response.data;
  },
);

const corporateDonation = createSlice({
  name: 'feedback',
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
  },
});

export const { reducer, caseReducers, actions } = corporateDonation;
