import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IState } from '../../interfaces/initial-state';
import { apiV1 } from '../constants/url';
import { IChangePassword, ISettings } from '../../interfaces/settings';
import { storage } from '../../services/storage';

const initialState: IState<ISettings | null> = {
  status: 'init',
  data: null,
  error: null,
};

export const getSettingsAction = createAsyncThunk<ISettings>('settings/get', async () => {
  const response = await axios.get(`${apiV1}/settings`);
  return response.data;
});

export const updateSettingsAction = createAsyncThunk<ISettings, ISettings>(
  'settings/put',
  async (payload) => {
    await axios.put(`${apiV1}/settings`, payload);
    return payload;
  },
);

export const changePasswordAction = createAsyncThunk<void, IChangePassword>(
  'password/put',
  async (payload) => {
    await axios.put(`${apiV1}/settings/password`, payload);
  },
);

const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSettingsAction.fulfilled, (state, action: PayloadAction<ISettings>) => {
      state.status = 'success';
      state.data = action.payload;
      storage.set('settings', action.payload);
    });
    builder.addCase(getSettingsAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getSettingsAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message || 'Ops something went wrong';
    });
    builder.addCase(updateSettingsAction.fulfilled, (state, action: PayloadAction<ISettings>) => {
      state.status = 'success';
      state.data = action.payload;
      storage.set('settings', action.payload);
    });
    builder.addCase(updateSettingsAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(updateSettingsAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message || 'Ops something went wrong';
    });
    builder.addCase(changePasswordAction.fulfilled, (state) => {
      state.status = 'success';
    });
    builder.addCase(changePasswordAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(changePasswordAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message || 'Ops something went wrong';
    });
  },
});

export const { actions, reducer, caseReducers } = settings;
