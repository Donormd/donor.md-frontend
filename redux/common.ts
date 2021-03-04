import { createSlice } from '@reduxjs/toolkit';

export interface IOptions {
  key: string | number;
  value: string | number;
  text: string | number;
}

const bloodGroups: IOptions[] = [
  { key: 1, value: 1, text: '0 (I) - Rh+' },
  { key: 2, value: 2, text: '0 (I) - Rh-' },
  { key: 3, value: 3, text: 'A (II) - Rh+' },
  { key: 4, value: 3, text: 'A (II) - Rh-' },
  { key: 5, value: 2, text: 'B (III) - Rh+' },
  { key: 6, value: 1, text: 'B (III) - Rh-' },
  { key: 7, value: 2, text: 'B (IV) - Rh+' },
  { key: 8, value: 3, text: 'B (IV) - Rh-' },
];

const cities: IOptions[] = [
  { key: 1, value: 'Тирасполь', text: 'Тирасполь' },
  { key: 2, value: 'Бендеры', text: 'Бендеры' },
  { key: 3, value: 'Рыбница', text: 'Рыбница' },
  { key: 4, value: 'Слободзея', text: 'Слободзея' },
  { key: 5, value: 'Днестровск', text: 'Днестровск' },
  { key: 6, value: 'Дубосары', text: 'Дубосары' },
  { key: 7, value: 'Каменка', text: 'Каменка' },
];

const organizations: IOptions[] = [
  { key: 1, value: 'Тест', text: 'Тест' },
  { key: 2, value: 'Тест', text: 'Тест' },
  { key: 3, value: 'Тест', text: 'Тест' },
  { key: 4, value: 'Тест', text: 'Тест' },
  { key: 5, value: 'Тест', text: 'Тест' },
  { key: 6, value: 'Тест', text: 'Тест' },
  { key: 7, value: 'Тест', text: 'Тест' },
];

const bloodCenter: IOptions[] = [
  {
    key: 1,
    value: 'Тирасполь',
    text: 'РКБ г.Тирасполь',
  },
  {
    key: 2,
    value: 'Бендеры',
    text: 'ГУ Бендерский центр амбулаторной-поликлинической помощи',
  },
  {
    key: 2,
    value: 'Рыбница',
    text: 'ГУ Рыбницкая центральная больница',
  },
];

const initialState = { cities, bloodGroups, bloodCenter, organizations };

const common = createSlice({
  name: 'common',
  initialState,
  reducers: {},
});

export const { reducer, caseReducers, actions } = common;
