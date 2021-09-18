import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

import { emailRegex } from '../../../core/constants/regex';
import { prepareError } from '../../../core/helpers/prepare-data';
import { signIn, signInType } from '../../../queries/user';
import { useTypedMutation } from '../../../queries/utils';
import { userAtom } from '../../../store/atoms/user-atom';
import { Alert } from '../../alert';
import { FormItem } from '../../UI/form/form-item';
import { Input } from '../../UI/form/input';
import { Title } from '../../UI/typography';
import { onChangeState } from './types';
import { ActionLayout, WrappedLink } from './utils';

export const SignInForm = ({ onChangeState }: { onChangeState: onChangeState }) => {
  const setUser = useSetRecoilState(userAtom);
  const resetUser = useResetRecoilState(userAtom);
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { push } = useRouter();

  const {
    mutate,
    isError,
    error,
    data: user,
  } = useTypedMutation('user', (payload: signInType) => signIn(payload));

  useEffect(() => {
    if (!user) {
      return resetUser();
    }

    push('dashboard/details');
    setUser(user);
  }, [push, resetUser, setUser, user]);

  const onSubmit = (payload: signInType) => {
    mutate(payload);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h2' margin='15px'>
        Авторизация
      </Title>
      <FormItem columns={1} error={errors.email?.message}>
        <Input
          placeholder='Введите email'
          name='email'
          ref={register({
            required: 'Обязательное поле',
            pattern: {
              value: emailRegex,
              message: 'Введите email',
            },
          })}
        />
      </FormItem>
      <FormItem columns={1} error={errors.password?.message}>
        <Input
          placeholder='Введите пароль'
          name='password'
          type='password'
          ref={register({
            required: 'Обязательное поле',
            minLength: {
              value: 8,
              message: 'Пароль должен быть больше 8 символов',
            },
          })}
        />
      </FormItem>
      <div>
        <ActionLayout btnText='Войти' linkText='Регистрация' linkOnClick={() => onChangeState('signUp')} />
        <WrappedLink onClick={() => onChangeState('recovery')} color='red' underline>
          Забыли пароль?
        </WrappedLink>
      </div>
      {isError && <Alert dismissible>{prepareError(error)}</Alert>}
    </form>
  );
};
