import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiV1 } from '../constants/url';
import { IState } from '../../interfaces/initial-state';
import { IUser } from '../../interfaces/user';

const initialState: IState<IUser[] | null> = {
  status: 'init',
  data: null,
  error: '',
};

export const getUser = createAsyncThunk<void, IUser>('user/get', async (payload) => {
  await axios.post(`${apiV1}/user`, {
    data: payload,
  });
});

export const createUser = createAsyncThunk<void, IUser>('user/post', async (payload) => {
  await axios.post(`${apiV1}/user`, {
    data: payload,
  });
});

export const deleteUser = createAsyncThunk<void, IUser>('user/delete', async (payload) => {
  await axios.post(`${apiV1}/user`, {
    data: payload,
  });
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
    builder.addCase(createUser.fulfilled, (state) => {
      state.status = 'success';
    });
    builder.addCase(createUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.status = 'error';
      state.error = String(action.error.message);
    });
  },
});

export const { reducer, actions, caseReducers } = user;
