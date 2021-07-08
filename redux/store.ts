import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { reducer as commonReducer } from './common';
import { reducer as aboutDonationsReducer } from './redusers/about-donations';
import { reducer as bonus } from './redusers/bonus';
import { reducer as corporateDonationReducer } from './redusers/corporate-donation';
import { reducer as donations } from './redusers/donation';
import { reducer as feedbackReducer } from './redusers/feedback';
import { reducer as questionnaire } from './redusers/forms/dashboard/questionnaire';
import { reducer as userStory } from './redusers/forms/user-story';
import { reducer as leftMenuReducer } from './redusers/left-menu';
import { reducer as monitoringReducer } from './redusers/monitoring';
import { reducer as recipient } from './redusers/recipients';
import { reducer as review } from './redusers/review';
import { password, settings } from './redusers/settings';
import { reducer as storiesReducer } from './redusers/stories';
import { reducer as userReducer } from './redusers/user';

export const store = configureStore({
  reducer: {
    common: commonReducer,
    stories: storiesReducer,
    leftMenu: leftMenuReducer,
    questionnaire,
    monitoring: monitoringReducer,
    aboutDonations: aboutDonationsReducer,
    feedback: feedbackReducer,
    corporateDonation: corporateDonationReducer,
    user: userReducer,
    userStory,
    recipient,
    donations,
    settings: settings.reducer,
    password: password.reducer,
    bonus,
    review,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
