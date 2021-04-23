import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button, Divider, Form, FormItem, Input } from '../../../UI';
import { IChangePassword } from '../../../../interfaces/settings';
import { changePasswordAction } from '../../../../redux/redusers/settings';
import { useAppSelector } from '../../../../redux/store';
import Alert from '../../../alert';

export const ChangePassword: FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const { status, error } = useAppSelector((store) => store.password);

  const onSubmit = (data: IChangePassword) => {
    dispatch(changePasswordAction(data));
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Divider />
      <FormItem columns={2} label='Введите старый пароль'>
        <Input type='text' name='newPassword' innerRef={register} />
      </FormItem>
      <FormItem columns={2} label='Введите новый пароль'>
        <Input type='text' name='oldPassword' innerRef={register} />
      </FormItem>
      <Button type='submit' variant='outline-danger' size='lg'>
        Сменить пароль
      </Button>
      {status === 'error' && <Alert dismissible>{error}</Alert>}
      {status === 'success' && <Alert dismissible>Вы успешно сменили пароль</Alert>}
    </Form>
  );
};
