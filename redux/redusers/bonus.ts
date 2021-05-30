import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IState } from '../../interfaces/initial-state';
import { IBonus } from '../../interfaces/bonus';
import { apiV1 } from '../constants/url';
import { fetch } from '../../services/fetch';

const initialState: IState<IBonus[] | null> = {
  status: 'init',
  data: null,
  error: null,
};

export const getBonusesAction = createAsyncThunk<IBonus[]>('bonuses/get', async () => {
  const response = await fetch<IBonus[]>({ url: `${apiV1}/bonus` });
  return response.data;
});

const bonus = createSlice({
  name: 'bonus',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBonusesAction.fulfilled, (state, action: PayloadAction<IBonus[]>) => {
      state.status = 'success';
      state.data = action.payload;
    });
    builder.addCase(getBonusesAction.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getBonusesAction.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message || 'Ops something went wrong';
    });
  },
});

export const { actions, caseReducers, reducer } = bonus;
