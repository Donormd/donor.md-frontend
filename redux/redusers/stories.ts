import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiV1 } from '../constants/url';
import { IState } from '../../interfaces/initial-state';
import { IStory } from '../../interfaces/story';
import { storage } from '../../services/storage';
import { fetch } from '../../services/fetch';

const initialState: IState<IStory[]> = {
  status: 'init',
  data: [],
  error: '',
};

const getStories = createAsyncThunk<IStory[]>('stories/get', async () => {
  const response = await fetch<IStory[]>({
    url: `${apiV1}/story`,
  });
  return response.data;
});

const stories = createSlice({
  name: 'stories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStories.fulfilled, (state, action) => {
      state.status = 'success';
      state.data = action.payload;
      storage.set('stories', action.payload);
    });
    builder.addCase(getStories.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getStories.rejected, (state, action) => {
      state.status = 'error';
      state.error = String(action.error.message);
    });
  },
});

export const { reducer, actions, caseReducers } = stories;
