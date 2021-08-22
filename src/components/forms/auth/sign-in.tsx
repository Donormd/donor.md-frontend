import { useForm } from 'react-hook-form';

import { emailRegex } from '../../../core/constants/regex';
import { signIn, signInType } from '../../../queries/user';
import { useTypedMutation } from '../../../queries/utils';
import { Alert } from '../../alert';
import { FormItem, Input, Title } from '../../UI';
import { onChangeState } from './types';
import { ActionLayout, WrappedLink } from './utils';

export const SignInForm = ({ onChangeState }: { onChangeState: onChangeState }) => {
  const { mutate, isError } = useTypedMutation('user', (payload: signInType) => signIn(payload));
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data: signInType) => {
    mutate(data);
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
          innerRef={register({
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
      {isError && <Alert dismissible />}
    </form>
  );
};
