import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiV1 } from '../constants/url';
import { IState } from '../../interfaces/initial-state';
import { IUser } from '../../interfaces/user';

const initialState: IState<IUser | null> = {
  status: 'init',
  data: null,
  error: null,
};

export const signIn = createAsyncThunk<IUser, { email: string; password: string }>(
  'user/get',
  async (payload) => {
    const response = await axios.post(`${apiV1}/auth/sign-in`, {
      data: payload,
    });
    return response.data;
  },
);

export const signUp = createAsyncThunk<IUser, IUser>('user/post', async (payload) => {
  const response = await axios.post(`${apiV1}/auth/sign-up`, {
    data: payload,
  });
  return response.data;
});

export const updateUser = createAsyncThunk<void, IUser>('user/put', async (payload) => {
  await axios.post(`${apiV1}/user`, {
    data: payload,
  });
});

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.status = 'success';
      state.data = action.payload;
    });
    builder.addCase(signIn.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message || 'Ops something went wrong';
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.status = 'success';
      state.data = action.payload;
    });
    builder.addCase(signUp.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message || 'Ops something went wrong';
    });
  },
});

export const { reducer, actions, caseReducers } = user;
