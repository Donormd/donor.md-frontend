import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IRejectValue, IState } from '../../interfaces/redux';
import { IUser, IUserStore } from '../../interfaces/user';
import { fetch } from '../../services/fetch';
import { storage } from '../../services/storage';
import { apiV1 } from '../constants/url';

const initialState: IState<IUser | null> = {
  status: 'init',
  data: null,
  error: null,
};

export const signInAction = createAsyncThunk<
  IUserStore,
  { email: string; password: string },
  IRejectValue
>('user/sign-in', async (payload, { rejectWithValue }) => {
  try {
    const response = await fetch<IUserStore>({
      method: 'POST',
      url: `${apiV1}/auth/sign-in`,
      data: payload,
    });

    return response.data;
  } catch (e) {
    return rejectWithValue(e.response.data);
  }
});

export const signUpAction = createAsyncThunk<IUser, IUser, IRejectValue>(
  'user/sign-up',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch<IUser>({
        method: 'POST',
        url: `${apiV1}/auth/sign-up`,
        data: payload,
      });
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const recoveryUserAction = createAsyncThunk<void, { email: string }>(
  'user/recovery',
  async (payload) => {
    await fetch<void>({
      method: 'POST',
      url: `${apiV1}/auth/recovery`,
      data: payload,
    });
  },
);

export const updateUserAction = createAsyncThunk<IUser | IUserStore, IUser>(
  'user/update',
  async (payload) => {
    await fetch({
      method: 'PUT',
      url: `${apiV1}/user`,
      data: payload,
      headers: {
        authorization: true,
      },
    });
    return payload;
  },
);

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDate(state, action: PayloadAction<IUser>) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInAction.fulfilled, (state, action: PayloadAction<IUserStore>) => {
      state.status = 'success';
      state.data = action.payload;
      storage.set('token', action.payload.token);
      action.payload.token = '';
      storage.set('user', action.payload);
    });
    builder.addCase(signInAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(signInAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload?.errorMessage || 'Ops something went wrong';
    });
    builder.addCase(signUpAction.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.status = 'success';
      state.data = action.payload;
    });
    builder.addCase(signUpAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(signUpAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload?.errorMessage || 'Ops something went wrong';
    });
    builder.addCase(updateUserAction.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.status = 'success';
      state.data = action.payload;
      storage.set('user', action.payload);
    });
    builder.addCase(updateUserAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(updateUserAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message || 'Ops something went wrong';
    });
  },
});

export const { setUserDate } = user.actions;
export const { reducer, caseReducers } = user;
