import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiV1 } from '../constants/url';
import { IState } from '../../interfaces/initial-state';
import { IRecipient } from '../../interfaces/recipient';
import { storage } from '../../services/storage';

const initialState: IState<IRecipient[] | null> = {
  status: 'init',
  data: null,
  error: null,
};

export const getRecipientRequestAction = createAsyncThunk<IRecipient[]>(
  'recipients/get',
  async () => {
    const response = await axios.get(`${apiV1}/recipient`);
    return response.data;
  },
);

export const createRecipientRequestAction = createAsyncThunk<void, IRecipient>(
  'recipients/post',
  async (payload) => {
    const response = await axios.post(`${apiV1}/recipient`, payload);
    return response.data;
  },
);

const recipients = createSlice({
  name: 'recipients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getRecipientRequestAction.fulfilled,
      (state, action: PayloadAction<IRecipient[]>) => {
        state.status = 'success';
        state.data = action.payload;
        storage.set('recipients', action.payload);
      },
    );
    builder.addCase(getRecipientRequestAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getRecipientRequestAction.rejected, (state, action) => {
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
      state.error = String(action.error.message);
    });
  },
});

export const { reducer, caseReducers, actions } = recipients;
