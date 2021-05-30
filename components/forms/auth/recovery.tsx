import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormItem, Input, Title } from '../../UI';
import { onChangeState } from './types';
import { ActionLayout } from './utils';
// import { Alert } from '../../alert';

declare type Props = { onChangeState: onChangeState };

export const RecoveryForm: FC<Props> = ({ onChangeState }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: { email: string }) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h2' margin='15px'>
        Восстановление доступа
      </Title>
      <FormItem columns={1}>
        <Input placeholder='Введите email' name='email' innerRef={register} />
      </FormItem>
      <div>
        <ActionLayout
          btnText='Восстановить'
          linkText='Войти'
          linkOnClick={() => onChangeState('signIn')}
        />
      </div>
      {/* {status === 'success' && <Alert dismissible>{status}</Alert>} */}
    </form>
  );
};
