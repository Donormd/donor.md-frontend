import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiV1 } from '../constants/url';
import { IState } from '../../interfaces/initial-state';
import { IUser } from '../../interfaces/user';
import { storage } from '../../services/storage';

const initialState: IState<IUser | null> = {
  status: 'init',
  data: null,
  error: null,
};

export const signInAction = createAsyncThunk<IUser, { email: string; password: string }>(
  'user/sign-in',
  async (payload) => {
    const response = await axios.post(`${apiV1}/auth/sign-in`, payload);
    return response.data;
  },
);

export const signUpAction = createAsyncThunk<IUser, IUser>('user/sign-up', async (payload) => {
  const response = await axios.post(`${apiV1}/auth/sign-up`, payload);
  return response.data;
});

export const recoveryUserAction = createAsyncThunk<void, { email: string }>(
  'user/recovery',
  async (payload) => {
    await axios.post(`${apiV1}/auth/recovery`, payload);
  },
);

export const updateUserAction = createAsyncThunk<IUser, IUser>('user/update', async (payload) => {
  await axios.post(`${apiV1}/user`, payload);
  return payload;
});

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDate(state, action: PayloadAction<IUser>) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInAction.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.status = 'success';
      state.data = action.payload;
      storage.set('user', action.payload);
    });
    builder.addCase(signInAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(signInAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message || 'Ops something went wrong';
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
      state.error = action.error.message || 'Ops something went wrong';
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
