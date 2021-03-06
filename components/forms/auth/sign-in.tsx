import React from 'react';
import { useForm } from 'react-hook-form';
import { FormItem, Input, Title } from '../../UI';
import { onChangeState } from './types';
import { ActionLayout, WrappedLink } from './utils';
import { useAppSelector } from '../../../redux/store';
import Alert from '../../alert';
import { useAuth } from '../../../hooks/useAuth';
import { useRequiredAuth } from '../../../hooks/useRequiredAuth';

declare type Props = { onChangeState: onChangeState };

export const SignInForm: React.FC<Props> = ({ onChangeState }): JSX.Element => {
  const { error } = useAppSelector((state) => state.user);
  const { handleSubmit, register } = useForm();
  const auth = useAuth();

  useRequiredAuth('/dashboard', '/auth');

  const onSubmit = (data: { email: string; password: string }) => {
    auth?.signIn(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h2' margin='15px'>
        Авторизация
      </Title>
      <FormItem columns={1}>
        <Input
          placeholder='Введите email'
          name='email'
          innerRef={register({
            required: 'Обязательное поле',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Введите email',
            },
          })}
        />
      </FormItem>
      <FormItem columns={1}>
        <Input
          placeholder='Введите пароль'
          name='password'
          type='password'
          innerRef={register({
            required: 'Обязательное поле',
            minLength: {
              value: 8,
              message: 'Пароль должен быть больше 8 символов',
            },
          })}
        />
      </FormItem>
      <div>
        <ActionLayout
          btnText='Войти'
          linkText='Регистрация'
          linkOnClick={() => onChangeState('signUp')}
        />
        <WrappedLink onClick={() => onChangeState('recovery')} color='red' underline>
          Забыли пароль?
        </WrappedLink>
      </div>
      {error && <Alert dismissible>{error}</Alert>}
    </form>
  );
};
