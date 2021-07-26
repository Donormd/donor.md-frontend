import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IState } from '../../core/interfaces/redux';
import { IReview } from '../../core/interfaces/review';
import { baseFetch } from '../../core/services/fetch';

const initialState: IState<IReview[] | null> = {
  status: 'init',
  data: null,
  error: null,
};

export const createReviewAction = createAsyncThunk<void, IReview>(
  'review/post',
  async (payload) => {
    await baseFetch<IReview>({
      url: `/review`,
      method: 'POST',
      data: payload,
      headers: {
        authorization: true,
      },
    });
  },
);

export const getReviewAction = createAsyncThunk<IReview[]>('review/get', async () => {
  const response = await baseFetch<IReview[]>({
    url: `/review`,
    headers: {
      authorization: true,
    },
  });
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
    builder.addCase(createReviewAction.fulfilled, (state) => {
      state.status = 'success';
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
