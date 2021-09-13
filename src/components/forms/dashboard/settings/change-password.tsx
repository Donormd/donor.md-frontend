import { useForm } from 'react-hook-form';

import { prepareError } from '../../../../core/helpers/prepare-data';
import { IChangePassword } from '../../../../core/interfaces/settings';
import { updatePassword } from '../../../../queries/settings';
import { useTypedMutation } from '../../../../queries/utils';
import { Alert } from '../../../alert';
import { Button, Divider, Form, FormItem, Input } from '../../../UI';

export const ChangePassword = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
    },
  });

  const { error, isError, isSuccess, mutate } = useTypedMutation('password', (payload: IChangePassword) =>
    updatePassword(payload),
  );

  const onSubmit = (data: IChangePassword) => {
    mutate(data);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Divider />
      <FormItem columns={2} label='Введите старый пароль'>
        <Input type='text' name='newPassword' ref={register} />
      </FormItem>
      <FormItem columns={2} label='Введите новый пароль'>
        <Input type='text' name='oldPassword' ref={register} />
      </FormItem>
      <Button type='submit' variant='outline-danger' size='lg'>
        Сменить пароль
      </Button>
      {isError && <Alert dismissible>{prepareError(error)}</Alert>}
      {isSuccess && <Alert dismissible>Вы успешно сменили пароль</Alert>}
    </Form>
  );
};
