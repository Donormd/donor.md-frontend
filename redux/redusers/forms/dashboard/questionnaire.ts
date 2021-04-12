import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IState } from '../../../../interfaces/initial-state';
import { apiV1 } from '../../../constants/url';
import { IQuestion, IQuestionnaireStory } from '../../../../interfaces/question';
import { storage } from '../../../../services/storage';

const initialState: IState<IQuestion[] | null> = {
  status: 'init',
  data: null,
  error: null,
};

export const getQuestionnaireAction = createAsyncThunk<IQuestion[]>(
  'questionnaire/get',
  async () => {
    const response = await axios.get(`${apiV1}/questionnaire`);
    return response.data;
  },
);

export const sendQuestionnaireAction = createAsyncThunk<void, IQuestionnaireStory>(
  'questionnaire/post',
  async (payload) => {
    await axios.post(`${apiV1}/questionnaire`, payload);
  },
);

export const questionnaire = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getQuestionnaireAction.fulfilled,
      (state, action: PayloadAction<IQuestion[]>) => {
        state.status = 'success';
        state.data = action.payload;
        storage.set('questionnaire', action.payload);
      },
    );
    builder.addCase(getQuestionnaireAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getQuestionnaireAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = String(action.error.message);
    });
    builder.addCase(sendQuestionnaireAction.fulfilled, (state) => {
      state.status = 'success';
    });
    builder.addCase(sendQuestionnaireAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(sendQuestionnaireAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = String(action.error.message);
    });
  },
});
