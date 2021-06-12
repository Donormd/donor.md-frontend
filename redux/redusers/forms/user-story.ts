import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IState } from '../../../core/interfaces/redux';
import { IStory } from '../../../core/interfaces/story';
import { fetch } from '../../../core/services/fetch';
import { storage } from '../../../core/services/storage';
import { apiV1 } from '../../constants/url';

const initialState: IState<IStory | null> = {
  status: 'init',
  data: null,
  error: '',
};

export const getUserStory = createAsyncThunk<IStory | null>('story/get', async () => {
  const response = await fetch<IStory | null>({
    url: `${apiV1}/story/`,
    headers: {
      authorization: true,
    },
  });
  return response.data;
});

export const createOrUpdateUserStory = createAsyncThunk<IStory, IStory>(
  'story/post',
  async (payload) => {
    await fetch({
      method: 'POST',
      url: `${apiV1}/story`,
      data: payload,
      headers: {
        authorization: true,
      },
    });
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
