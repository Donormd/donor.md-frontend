import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiV1 } from '../constants/url';
import { IState } from '../../interfaces/initial-state';
import { IRecipient, IRecipientCard } from '../../interfaces/recipient';
import { storage } from '../../services/storage';
import { fetch } from '../../services/fetch';

const initialState: IState<IRecipientCard[] | null> = {
  status: 'init',
  data: null,
  error: null,
};

export const getRecipientsAction = createAsyncThunk<IRecipientCard[]>(
  'recipients/get',
  async () => {
    const response = await fetch<IRecipientCard[]>({
      url: `${apiV1}/recipient`,
    });
    return response.data;
  },
);

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
    builder.addCase(
      getRecipientsAction.fulfilled,
      (state, action: PayloadAction<IRecipientCard[]>) => {
        state.status = 'success';
        state.data = action.payload;
        storage.set('recipients', action.payload);
      },
    );
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
