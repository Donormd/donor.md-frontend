import React from 'react';
import { Form, FormItem, Input, Title } from '../../UI';
import { onChangeState } from './types';
import { ActionLayout } from './utils';

declare type Props = { onChangeState: onChangeState };

export const RecoveryForm: React.FC<Props> = ({ onChangeState }): JSX.Element => (
  <Form>
    <Title as='h2' margin='15px'>
      Восстановление доступа
    </Title>
    <FormItem columns={1}>
      <Input placeholder='Введите email' />
    </FormItem>
    <div>
      <ActionLayout
        btnText='Восстановить'
        linkText='Войти'
        linkOnClick={() => onChangeState('signIn')}
      />
    </div>
  </Form>
);
