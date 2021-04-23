import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetch } from '../../services/fetch';
import { IState } from '../../interfaces/initial-state';
import { apiV1 } from '../constants/url';
import { IChangePassword, ISettings } from '../../interfaces/settings';
import { storage } from '../../services/storage';

const initialState: IState<ISettings | null> = {
  status: 'init',
  data: null,
  error: null,
};

export const getSettingsAction = createAsyncThunk<ISettings | null>('settings/get', async () => {
  const response = await fetch<ISettings | null>({
    url: `${apiV1}/settings`,
    headers: {
      authorization: true,
    },
  });
  return response.data;
});

export const updateSettingsAction = createAsyncThunk<ISettings, ISettings>(
  'settings/put',
  async (data) => {
    await fetch({
      method: 'put',
      url: `${apiV1}/settings`,
      headers: {
        authorization: true,
      },
      data,
    });
    return data;
  },
);

export const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getSettingsAction.fulfilled,
      (state, action: PayloadAction<ISettings | null>) => {
        state.status = 'init';
        state.data = action.payload;
        storage.set('settings', action.payload);
      },
    );
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
  },
});

/* Password Change state reducer */

const initialPasswordState: IState<null> = {
  status: 'init',
  data: null,
  error: null,
};

export const changePasswordAction = createAsyncThunk<void, IChangePassword>(
  'password/put',
  async (data) => {
    await fetch({
      url: `${apiV1}/settings/password`,
      headers: {
        authorization: true,
      },
      data,
    });
  },
);

export const password = createSlice({
  name: 'passwordReducer',
  initialState: initialPasswordState,
  reducers: {},
  extraReducers: (builder) => {
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
