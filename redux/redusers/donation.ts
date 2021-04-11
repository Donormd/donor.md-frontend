import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiV1 } from '../constants/url';
import { IState } from '../../interfaces/initial-state';
import { storage } from '../../services/storage';
import { IDonation } from '../../interfaces/donation';

const initialState: IState<IDonation[]> = {
  status: 'init',
  data: [],
  error: null,
};

export const getDonationAction = createAsyncThunk<IDonation[]>('donations/get', async () => {
  const response = await axios.get(`${apiV1}/donations`);
  return response.data;
});

export const addDonationAction = createAsyncThunk<IDonation, IDonation>(
  'donations/post',
  async (payload) => {
    const response = await axios.post(`${apiV1}/donations`, payload);
    return response.data;
  },
);

const recipients = createSlice({
  name: 'donations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDonationAction.fulfilled, (state, action: PayloadAction<IDonation[]>) => {
      state.status = 'success';
      state.data = action.payload;
      storage.set('donations', action.payload);
    });
    builder.addCase(getDonationAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getDonationAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = String(action.error.message);
    });
    builder.addCase(addDonationAction.fulfilled, (state, action: PayloadAction<IDonation>) => {
      state.status = 'success';
      state.data = [...state.data, action.payload];
      storage.set('donations', [...state.data, action.payload]);
    });
    builder.addCase(addDonationAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(addDonationAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = String(action.error.message);
    });
  },
});

export const { reducer, caseReducers, actions } = recipients;
