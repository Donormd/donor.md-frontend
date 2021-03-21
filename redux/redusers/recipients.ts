import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiV1 } from '../constants/url';

const initialState = {
  status: '',
  error: '',
};

export interface IRecipient {
  recipient: {
    fullname: string;
    dateBirth: Date;
    bloodGroupId: string;
    medicalCenterId: string;
    bloodCenterId: string;
    numberDonors: number;
    deadline: Date;
    info: string;
    src: string;
  };
  contactPerson: {
    fullname: string;
    email: string;
    phone: string;
    whoAreYou: string;
  };
}

export const sendData = createAsyncThunk<string, IRecipient>('recipients/post', async (payload) => {
  const response = await axios.post(`${apiV1}/recipient`, {
    data: [payload],
  });
  return response.data;
});

const recipients = createSlice({
  name: 'recipients',
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

export const { reducer, caseReducers, actions } = recipients;
