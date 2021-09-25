import { emailRegex } from '../constants/regex';

export const requiredField = {
  required: {
    value: true,
    message: 'Обязательное поле',
  },
};

export const emailField = {
  pattern: {
    value: emailRegex,
    message: 'Введите email',
  },
};
