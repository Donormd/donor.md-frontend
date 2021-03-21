import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiV1 } from '../constants/url';
import { IState } from '../../interfaces/initial-state';

const initialState: IState<any> = {
  status: 'init',
  data: [],
  error: '',
};

const getData = createAsyncThunk<any, any>('stories/get', async () => {
  const response = await axios.get(`${apiV1}/stories`);
  return response.data;
});

const stories = createSlice({
  name: 'stories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.status = 'success';
      state.data = action.payload;
    });
    builder.addCase(getData.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.status = 'error';
      state.error = String(action.error.message);
    });
  },
});

export const { reducer, actions, caseReducers } = stories;
