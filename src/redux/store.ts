import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { reducer as commonReducer } from './common';
import { reducer as aboutDonationsReducer } from './redusers/about-donations';
import { reducer as corporateDonationReducer } from './redusers/corporate-donation';
import { reducer as donations } from './redusers/donation';
import { reducer as feedbackReducer } from './redusers/feedback';
import { reducer as questionnaire } from './redusers/forms/dashboard/questionnaire';
import { reducer as leftMenuReducer } from './redusers/left-menu';
import { reducer as review } from './redusers/review';
import { password, settings } from './redusers/settings';
import { reducer as userReducer } from './redusers/user';

export const store = configureStore({
  reducer: {
    common: commonReducer,
    leftMenu: leftMenuReducer,
    questionnaire,
    aboutDonations: aboutDonationsReducer,
    feedback: feedbackReducer,
    corporateDonation: corporateDonationReducer,
    user: userReducer,
    donations,
    settings: settings.reducer,
    password: password.reducer,
    review,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
