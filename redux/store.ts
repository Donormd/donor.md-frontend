import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { common } from './common';
import { reducer as storiesReducer } from './stories';
import { questinare } from './forms/dashboard/questinare';

export const store = configureStore({
  reducer: {
    common,
    stories: storiesReducer,
    questinare,
  },
});

export type TypeState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<TypeState> = useSelector;
