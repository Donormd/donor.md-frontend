import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IRecipient } from '../../core/interfaces/recipient';
import { IState } from '../../core/interfaces/redux';
import { fetch } from '../../core/services/fetch';
import { storage } from '../../core/services/storage';
import { apiV1 } from '../constants/url';

const initialState: IState<IRecipient[]> = {
  status: 'init',
  data: [],
  error: null,
};

export const getRecipientsAction = createAsyncThunk<IRecipient[]>('recipients/get', async () => {
  const response = await fetch<IRecipient[]>({
    url: `${apiV1}/recipient`,
    headers: {
      authorization: true,
    },
  });
  return response.data;
});

export const createRecipientRequestAction = createAsyncThunk<void, IRecipient>(
  'recipients/post',
  async (payload) => {
    await fetch({
      url: `${apiV1}/recipient`,
      method: 'POST',
      data: payload,
    });
  },
);

const recipients = createSlice({
  name: 'recipients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecipientsAction.fulfilled, (state, action: PayloadAction<IRecipient[]>) => {
      state.status = 'success';
      state.data = action.payload;
      storage.set('recipients', action.payload);
    });
    builder.addCase(getRecipientsAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getRecipientsAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = String(action.error.message);
    });
    builder.addCase(createRecipientRequestAction.fulfilled, (state) => {
      state.status = 'success';
    });
    builder.addCase(createRecipientRequestAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(createRecipientRequestAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message || 'Ops something went wrong';
    });
  },
});

export const { reducer, caseReducers, actions } = recipients;
