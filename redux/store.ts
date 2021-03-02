import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { reducer as commonReducer } from './common';
import { reducer as storiesReducer } from './redusers/stories';
import { questionnaire } from './forms/dashboard/questionnaire';
import { reducer as monitoringReducer } from './redusers/monitoring';
import { reducer as leftMenuReducer } from './redusers/left-menu';

export const store = configureStore({
  reducer: {
    common: commonReducer,
    stories: storiesReducer,
    leftMenu: leftMenuReducer,
    questionnaire,
    monitoring: monitoringReducer,
  },
});

export type TypeState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<TypeState> = useSelector;
