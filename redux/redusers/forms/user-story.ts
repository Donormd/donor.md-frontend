import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiV1 } from '../../constants/url';
import { IState } from '../../../interfaces/initial-state';
import { IStory } from '../../../interfaces/story';
import { storage } from '../../../services/storage';

const initialState: IState<IStory | null> = {
  status: 'init',
  data: null,
  error: '',
};

export const getUserStory = createAsyncThunk<IStory | null, string>('story/get', async (id) => {
  const response = await axios.get(`${apiV1}/story/${id}`);
  return response.data;
});

export const createOrUpdateUserStory = createAsyncThunk<IStory, IStory>(
  'story/post',
  async (payload) => {
    await axios.post(`${apiV1}/story`, payload);
    return payload;
  },
);

const stories = createSlice({
  name: 'user-story',
  initialState,
  reducers: {
    setUserStory(state, action: PayloadAction<IStory>) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserStory.fulfilled, (state, action) => {
      state.status = 'success';
      state.data = action.payload;
      storage.set('userStory', action.payload);
    });
    builder.addCase(getUserStory.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getUserStory.rejected, (state, action) => {
      state.status = 'error';
      state.error = String(action.error.message);
    });
    builder.addCase(createOrUpdateUserStory.fulfilled, (state, action) => {
      state.status = 'success';
      state.data = action.payload;
      storage.set('userStory', action.payload);
    });
    builder.addCase(createOrUpdateUserStory.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(createOrUpdateUserStory.rejected, (state, action) => {
      state.status = 'error';
      state.error = String(action.error.message);
    });
  },
});
export const { setUserStory } = stories.actions;
export const { reducer, actions, caseReducers } = stories;
