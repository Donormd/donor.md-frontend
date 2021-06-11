import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { IState } from '../../interfaces/redux';
import { IReview } from '../../interfaces/review';
import { fetch } from '../../services/fetch';
import { apiV1 } from '../constants/url';

const initialState: IState<IReview[] | null> = {
  status: 'init',
  data: null,
  error: null,
};

export const createReviewAction = createAsyncThunk<IReview, IReview>(
  'review/post',
  async (payload) => {
    await fetch<IReview>({
      url: `${apiV1}/review`,
      method: 'POST',
      data: payload,
    });
    return payload;
  },
);

export const getReviewAction = createAsyncThunk<IReview[]>('review/get', async () => {
  const response = await axios.get(`${apiV1}/review`);
  return response.data;
});

const review = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviewAction.fulfilled, (state, action: PayloadAction<IReview[]>) => {
      state.status = 'success';
      state.data = action.payload;
    });
    builder.addCase(getReviewAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getReviewAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message || 'Ops something went wrong';
    });
    builder.addCase(createReviewAction.fulfilled, (state, action: PayloadAction<IReview>) => {
      state.status = 'success';
      state.data = state.data ? [...state.data, action.payload] : [action.payload];
    });
    builder.addCase(createReviewAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(createReviewAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message || 'Ops something went wrong';
    });
  },
});

export const { reducer, actions, caseReducers } = review;
